import {
  Session,
  AuthHandler,
  GoogleAdapter,
  LinkAdapter,
} from "sst/node/auth";
import { Table } from "sst/node/table";
import { TokenSet } from "openid-client";
import {
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
} from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const GOOGLE_CLIENT_ID =
  "962898175553-jv8vbefsu4lha7hbopg4tu7bsc7j20ke.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

declare module "sst/node/auth" {
  export interface SessionTypes {
    user: {
      userID: string;
    };
  }
}

export const handler = AuthHandler({
  providers: {
    google: GoogleAdapter({
      mode: "oauth",
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      scope: "email",
      prompt: "consent",
      onSuccess: async (tokenset) => onSuccessLogin(tokenset),
    }),
    link: LinkAdapter({
      onLink: async (link, claims) => {
        /* ------------ To Implement ------------ */
        /* This function receives a link that     */
        /* you can send over email or sms so      */
        /* that the user can login.               */
        /* -------------------------------------- */
        return {
          statusCode: 200,
          body: link,
        };
      },
      onSuccess: async (tokenset) => onSuccessLogin(<TokenSet>tokenset),

      onError: async () => {
        return {
          statusCode: 403,
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify("error"),
        };
      },
    }),
  },
});

const onSuccessLogin = async (tokenset: TokenSet) => {
  const claims = tokenset.claims();
  const ddb = new DynamoDBClient({});
  console.log("Claims:", claims);
  let user;
  // 1. Control that the user exists in our database and in case provide the session token
  dynamoDB
    .get({
      TableName: Table.profiles.tableName,
      Key: {
        tenantId: claims.sub,
      },
    })
    .promise()
    .then((data) => {
      console.log(data.Item);
      user = data;
    })
    .catch(console.error);

  if (!user) {
    // 2. Control that the user can signup to our service otherwise send a forbidden message
    // if (claims.email in whitelist)

    // 3. Create a new user and provide the session token

    // Sign in up

    dynamoDB
      .put({
        Item: {
          tenantId: claims.sub, //primary key
          userId: "sdlifuhlaskdhf", // create a unique 16 characters id - secondary key
          email: claims.email, //third key ideally - chekc how to do it with Dynamo!! YEEEEEEEE
        },
        TableName: Table.profiles.tableName,
      })
      .promise()
      .then((data) => console.log(data.Attributes))
      .catch(console.error);

    return Session.parameter({
      redirect: "http://localhost:3000/",
      type: "user",
      properties: {
        userID: claims.sub,
      },
    });
  }
};
