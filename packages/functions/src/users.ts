import { GetItemCommand } from "@aws-sdk/client-dynamodb";
import { ddb } from "./lib/dynamo";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";

import { Table } from "sst/node/table";

import { ApiHandler } from "sst/node/api";
import { useSession } from "sst/node/auth";
import { httpResponse } from "./lib/http";

export const getUser = ApiHandler(async (context) => {
  // Check user is authenticated and get the email
  const session = useSession();
  if (session.type !== "user") {
    return httpResponse(401, "getUser Error: User not authenticated");
  }

  // Set the parameters for the get function
  const params = {
    TableName: Table.user.tableName,
    Key: marshall({
      email: session.properties.email,
    }),
  };

  // Read
  let data;
  try {
    data = await ddb.send(new GetItemCommand(params));
  } catch (error) {
    console.log("getUser Error: ddb.send GetItemCommand has a problem.", error);
    return httpResponse(
      500,
      JSON.stringify({
        message: "getUser Error: ddb.send GetItemCommand has a problem.",
        errorBody: error,
      })
    );
  }

  // Data check
  if (!data || !data.Item) {
    console.log("getUser Error: missing data.Item");
    return httpResponse(500, "getUser Error: missing data.Item");
  }

  // Success
  return httpResponse(200, JSON.stringify(unmarshall(data.Item)));
});

// ToDo
export const updateEmail = ApiHandler(async () => {
  const data = {};
  return {
    statusCode: 200,
    body: JSON.stringify(unmarshall(data)),
  };
});

// ToDo
export const updateUsername = ApiHandler(async () => {
  const data = {};
  return {
    statusCode: 200,
    body: JSON.stringify(unmarshall(data)),
  };
});

// ToDo
export const disableUser = ApiHandler(async () => {
  const data = {};
  return {
    statusCode: 200,
    body: JSON.stringify(unmarshall(data)),
  };
});
