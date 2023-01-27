import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const update: APIGatewayProxyHandlerV2 = async (event) => {
  // const getParams = {
  //   // Get the table name from the environment variable
  //   TableName: process.env.TABLE_NAME,
  //   // Get the row where the counter is called "hits"
  //   Key: {
  //     counter: "hits",
  //   },
  // };
  // const results = await dynamoDb.get(getParams).promise();
  // // If there is a row, then get the value of the
  // // column called "tally"
  // let count = results.Item ? results.Item.tally : 0;
  // const putParams = {
  //   TableName: process.env.TABLE_NAME,
  //   Key: {
  //     counter: "hits",
  //   },
  //   // Update the "tally" column
  //   UpdateExpression: "SET tally = :count",
  //   ExpressionAttributeValues: {
  //     // Increase the count
  //     ":count": ++count,
  //   },
  // };
  // await dynamoDb.update(putParams).promise();
  // res.status(200).send(count);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
    },
    body: `Hello, World! Your request was received at ${event.requestContext.time}.`,
  };
};

export const get: APIGatewayProxyHandlerV2 = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
    },
    body: `Hello, World! Your request was received at ${event.requestContext.time}.`,
  };
};
