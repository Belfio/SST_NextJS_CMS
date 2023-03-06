import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";

import { Table } from "sst/node/table";

import { ApiHandler } from "sst/node/api";
import { useSession } from "sst/node/auth";

const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
const dynamoDB = new AWS.DynamoDB.DocumentClient();

export const getUser = ApiHandler(async () => {
  const session = useSession();

  // Check user is authenticated
  if (session.type !== "user") {
    throw new Error("Not authenticated");
  }

  const ddb = new DynamoDBClient({});
  // const data = await ddb.send(
  //   new GetItemCommand({
  //     TableName: Table.profiles.tableName,
  //     Key: marshall({
  //       userId: session.properties.userID,
  //     }),
  //   })
  // );

  let user;
  dynamoDB
    .get({
      TableName: Table.profiles.tableName,
      Key: {
        // email: claims.email,
        tenantId: session.properties.userID,
      },
    })
    .promise()
    .then((data) => {
      console.log(data.Item);
      user = data;
      return {
        statusCode: 200,
        body: JSON.stringify(unmarshall(user)),
      };
    });
});
