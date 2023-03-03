import {
  StackContext,
  Api,
  Auth,
  StaticSite,
  Table,
  Function,
} from "sst/constructs";

export function ExampleStack({ stack }: StackContext) {
  // Create a database Table
  const table = new Table(stack, "users", {
    fields: {
      userId: "string",
    },
    primaryIndex: { partitionKey: "userId" },
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
  const api = new Api(stack, "api", {
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
          handler: "packages/functions/src/authoriser.main",
          bind: [auth],
        }),
      },
    },
    routes: {
      "GET /": "packages/functions/src/auth.handler",
      "GET /session": "packages/functions/src/session.handler",
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
