import {
  StackContext,
  Api,
  Auth,
  StaticSite,
  Table,
  Function,
} from "sst/constructs";

export function AuthStack({ stack }: StackContext) {
  // Create a database Table
  const table = new Table(stack, "user", {
    fields: {
      tenantId: "string",
      email: "string",
      userId: "string",
      userName: "string",
      role: "string",
    },
    primaryIndex: { partitionKey: "email" },
    globalIndexes: {
      GSI1: { partitionKey: "role", sortKey: "email" },
      GSI2: { partitionKey: "role", sortKey: "userId" },
    },
  });

  // Create a React site
  const site = new StaticSite(stack, "site", {
    path: "web",
    environment: {
      VITE_APP_API_URL:
        "https://7yja97ms6k.execute-api.us-east-1.amazonaws.com",
      // VITE_APP_API_URL: api.url,
      // buildCommand: "npm run build", // or "yarn build"
      // buildOutput: "dist",
    },
  });

  // Create Auth provider
  const auth = new Auth(stack, "auth", {
    authenticator: {
      handler: "packages/functions/src/auth.handler",
      bind: [site],
    },
  });

  // Create Api
  const api = new Api(stack, "authApi", {
    defaults: {
      function: {
        bind: [table],
      },
      authorizer: "lambda",
    },
    authorizers: {
      lambda: {
        type: "lambda",
        responseTypes: ["simple"],
        function: new Function(stack, "Authorizer", {
          handler: "packages/functions/src/authoriser.user",
          bind: [auth],
        }),
      },
    },
    routes: {
      "GET /": "packages/functions/src/auth.handler",
      "GET /session": "packages/functions/src/users.getUser",
      "GET /poba": "packages/functions/src/session.poba",
    },
  });

  auth.attach(stack, {
    api,
    prefix: "/auth",
  });

  // Show the API endpoint and other info in the output
  stack.addOutputs({
    ApiEndpoint: api.url,
    SiteURL: site.url || "not found",
  });
}
