import {
  Session,
  AuthHandler,
  GoogleAdapter,
  LinkAdapter,
} from "sst/node/auth";
import { Table } from "sst/node/table";
import { StaticSite } from "sst/node/site";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";

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
      onSuccess: async (tokenset) => {
        const claims = tokenset.claims();
        console.log("Sino a qua sta andando", claims);
        const ddb = new DynamoDBClient({});
        await ddb.send(
          new PutItemCommand({
            TableName: Table.users.tableName,
            Item: marshall({
              userId: claims.sub,
              email: claims.email,
              // picture: claims.picture,
              // name: claims.given_name,
            }),
          })
        );

        return Session.parameter({
          redirect: "http://localhost:3000/",
          type: "user",
          properties: {
            userID: claims.sub,
          },
        });
      },
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
      onSuccess: async (claims) => {
        return {
          statusCode: 200,
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(claims),
        };
      },

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
