import {
  Api,
  NextjsSite,
  StackContext,
  Table,
  Cognito,
  Auth,
} from "@serverless-stack/resources";

export function MyStack({ stack, app }: StackContext) {
  // Create the table
  const usersTable = new Table(stack, "users", {
    fields: {
      email: "string",
      id: "string",
      name: "string",
    },
    primaryIndex: { partitionKey: "id" },
  });

  const auth = new Cognito(stack, "Auth", {
    login: ["email"],
  });

  const apiProfile = new Api(stack, "Api", {
    defaults: {
      authorizer: "iam",
    },
    cors: {
      allowCredentials: true,
      allowHeaders: ["content-type"],
      allowMethods: ["ANY"],
      allowOrigins: ["http://localhost:3000/"],
    },
    routes: {
      "POST /profile/update": "functions/profile.update",
      "GET /profile": {
        function: "functions/profile.get",
        authorizer: "none",
      },
    },
  });

  // Create a Next.js site
  const site = new NextjsSite(stack, "Site", {
    path: "frontend",
    environment: {
      // Pass the table details to our app
      REGION: app.region,
      TABLE_NAME: usersTable.tableName,
    },
  });

  // Allow the Next.js API to access the table
  site.attachPermissions([usersTable]);
  apiProfile.attachPermissions([usersTable]);

  // Show the site URL in the output
  stack.addOutputs({
    URL: site.url,
    ApiEndpoint: apiProfile.url,
    UserPoolId: auth.userPoolId,
    IdentityPoolId: auth.cognitoIdentityPoolId,
    UserPoolClientId: auth.userPoolClientId,
  });
}
