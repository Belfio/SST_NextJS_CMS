import AWS from "aws-sdk";
import apigClientFactory from "aws-api-gateway-client";

const region = "us-east-1";

export default function makeRequest({
  accessToken,
  url,
  params,
  method,
  pathTemplate,
  body,
  additionalParams,
}) {
  console.log("Making API request", AWS.config.credentials);

  var apigClient = apigClientFactory.newClient({
    apiKey: undefined,
    accessKey: AWS.config.credentials.accessKeyId,
    secretKey: AWS.config.credentials.secretAccessKey,
    sessionToken: AWS.config.credentials.sessionToken,
    region,
    invokeUrl: url,
  });

  if (argv.accessTokenHeader) {
    const tokenHeader = {};
    tokenHeader[argv.accessTokenHeader] = accessToken;
    additionalParams.headers = Object.assign(
      {},
      additionalParams.headers,
      tokenHeader
    );
  }

  apigClient
    .invokeApi(params, pathTemplate, method, additionalParams, body)
    .then((result) => {
      console.dir({
        status: result.status,
        statusText: result.statusText,
        data: result.data,
      });
    })
    .catch((result) => {
      if (result.response) {
        console.dir({
          status: result.response.status,
          statusText: result.response.statusText,
          data: result.response.data,
        });
      } else {
        console.log(result.message);
      }
    });
}

// export const submitToApi = async ({
//   body = {},
//   cognitoUser,
//   creds,
//   method = "GET",
//   path,
//   pathParams,
//   query = {},
//   url,
//   userProfile = {},
//   withoutUserId = false,
// }) => {
//   const apigClientFactory = require("aws-api-gateway-client").default;

//   // Invoking APIGateway with IAM credentials
//   const apigClient = apigClientFactory.newClient({
//     invokeUrl: url, // REQUIRED
//     accessKey: creds.accessKeyId, // REQUIRED
//     secretKey: creds.secretAccessKey, // REQUIRED
//     sessionToken: creds.sessionToken, // OPTIONAL: If you are using temporary credentials you must include the session token
//     region: "eu-west-2", // REQUIRED: The region where the API is deployed.
//     systemClockOffset: 0, // OPTIONAL: An offset value in milliseconds to apply to signing time
//     retries: 4, // OPTIONAL: Number of times to retry before failing. Uses axon-retry plugin.
//     // OPTIONAL: Callback to further control if request should be retried.  Uses axon-retry plugin.
//     retryCondition: (err) => err.response && err.response.status === 500,
//   });

//   if (!cognitoUser) {
//     return Promise.reject("[submitToApi] Error with cognitoUser");
//   }

//   const additionalParams = {
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     queryParams: {
//       ...pathParams,
//     },
//   };

//   console.log(`%c[submitToApi] ${method} ${path}`, "color: #66f", {
//     additionalParams,
//     body,
//   });

//   try {
//     const response = await apigClient.invokeApi(
//       pathParams,
//       path,
//       method,
//       additionalParams,
//       body
//     );
//     console.log(
//       `%c[submitToApi] ${method} ${path} %cSUCCESS`,
//       "color: #66f",
//       "color: #0f0",
//       response.data
//     );

//     if ("errorMessage" in response.data) {
//       return Promise.reject(response.data.errorMessage);
//     }

//     return Promise.resolve(response.data);
//   } catch (error) {
//     console.log(
//       `%c[submitToApi] ${method} ${path} %cERROR`,
//       "color: #66f",
//       "color: #f00",
//       error,
//       error?.response
//     );

//     if (error.response === undefined && error.toString) {
//       console.warn("[submitToApi] e.g. HTTP method is incorrect", error);
//       return Promise.reject(error.toString());
//     }

//     if (error?.response?.data && typeof error.response.data === "string") {
//       console.warn(
//         "[submitToApi] API Gateway error (invalid JSON, do not parse)",
//         error
//       );
//       return Promise.reject(error.response.data);
//     }

//     if ("errorMessage" in error) {
//       console.warn("[submitToApi] Lambda error", error);
//       return Promise.reject(error.errorMessage);
//     }

//     return Promise.reject("Something went really wrong.");
//   }
// };
