import { GetItemCommand } from "@aws-sdk/client-dynamodb";
import { ddb } from "./lib/dynamo";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";

import { Table } from "sst/node/table";

import { ApiHandler } from "sst/node/api";
import { useSession } from "sst/node/auth";

export const getUser = ApiHandler(async (context) => {
  // Check user is authenticated and get the email
  const session = useSession();
  if (session.type !== "user") {
    throw new Error("Not authenticated");
  }

  // Set the parameters for the get function
  const params = {
    TableName: Table.user.tableName,
    Key: marshall({
      email: session.properties.email,
    }),
  };

  const data = await ddb.send(new GetItemCommand(params));

  console.log(data);
  if (!data.Item) {
    console.log("Problema");
    return {
      statusCode: 403,
      body: "tenemmo u problema",
    };
  }
  const user = data.Item;
  return {
    statusCode: 200,
    body: JSON.stringify(unmarshall(user)),
  };
});
