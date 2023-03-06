import {
  Session,
  AuthHandler,
  GoogleAdapter,
  LinkAdapter,
} from "sst/node/auth";
import { Table } from "sst/node/table";
import { TokenSet } from "openid-client";
import { GetItemCommand, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { v4 as uuidv4 } from "uuid";
import { ddb } from "./lib/dynamo";

const GOOGLE_CLIENT_ID =
  "962898175553-jv8vbefsu4lha7hbopg4tu7bsc7j20ke.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

declare module "sst/node/auth" {
  export interface SessionTypes {
    user: {
      email: string;
      userId: string;
    };
    error: {
      message: string;
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
      onSuccess: async (tokenset) => onSuccessLogin(tokenset as TokenSet),

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
  console.log("onSuccessLogin:", claims);

  // 0. Data format control
  if (!claims.email || !claims.sub)
    return Session.parameter({
      redirect: "http://localhost:3000/error",
      type: "error",
      properties: {
        message: "Error: data format of the claims is wrong",
      },
    });

  // 1. Control that the user exists in our database and in case provide the session token
  const params = {
    TableName: Table.user.tableName,
    Key: marshall({
      email: claims.email,
    }),
  };

  const data = await ddb.send(new GetItemCommand(params));
  console.log("successLogin", data.Item);
  if (!data.Item) {
    // 2. Control that the user can signup to our service otherwise send a forbidden message
    // if (claims.email in whitelist)

    // 3. Create a new user and provide the session token

    // Sign in up
    const userProfile = {
      tenantId: claims.sub, //primary key
      userId: uuidv4(), // create a unique 16 characters id - secondary key
      email: claims.email, //third key ideally - chekc how to do it with Dynamo!! YEEEEEEEE
      role: "user", //third key ideally - chekc how to do it with Dynamo!! YEEEEEEEE
    };

    const writeUser = await ddb.send(
      new PutItemCommand({
        TableName: Table.user.tableName,
        Item: marshall(userProfile),
      })
    );
    return Session.parameter({
      redirect: "http://localhost:3000/",
      type: "user",
      properties: {
        email: userProfile.email,
        userId: userProfile.userId,
      },
    });
  } else {
    if (!data.Item || !data.Item.email || !data.Item.userId)
      return Session.parameter({
        redirect: "http://localhost:3000/error",
        type: "error",
        properties: {
          message: "Error: the format of the user from the database is wrong",
        },
      });
    return Session.parameter({
      redirect: "http://localhost:3000/",
      type: "user",
      properties: {
        email: data.Item.email.toString(),
        userId: data.Item.userId.toString(),
      },
    });
  }
};
