import {
  StackContext,
  Api,
  Auth,
  StaticSite,
  Table,
  Function,
} from "sst/constructs";

export function ContentStack({ stack }: StackContext) {
  const tableAdminContent = new Table(stack, "adminContent", {
    fields: {
      email: "string",
      userId: "string",
      role: "string",
      publishingDate: "number",
      postId: "string",
      userName: "string",
    },
    primaryIndex: { partitionKey: "role", sortKey: "publishingDate" },
    globalIndexes: {
      GSI1: { partitionKey: "userId", sortKey: "publishingDate" },
    },
  });

  const tableUserContent = new Table(stack, "userContent", {
    fields: {
      userName: "string",
      email: "string",
      userId: "string",
      role: "string",
      postId: "string",
      referenceId: "string",
      publishingDate: "number",
    },
    primaryIndex: { partitionKey: "referenceId", sortKey: "publishingDate" },
    globalIndexes: {
      GSI1: { partitionKey: "userId", sortKey: "publishingDate" },
    },
  });

  const userAuth = new Function(stack, "UserAuthorizer", {
    handler: "packages/functions/src/authoriser.user",
    // bind: [auth],
  });

  const adminAuth = new Function(stack, "AdminAuthorizer", {
    handler: "packages/functions/src/adminAuthoriser.admin",
    // bind: [auth],
  });

  // Create Api
  const apiAdmin = new Api(stack, "apiContentAdmin", {
    defaults: {
      function: {
        bind: [tableAdminContent],
      },
    },
    authorizers: {
      lambdaAdmin: {
        type: "lambda",
        responseTypes: ["simple"],
        function: adminAuth,
      },
      lambdaUser: {
        type: "lambda",
        responseTypes: ["simple"],
        function: adminAuth,
      },
    },
    routes: {
      "GET    /content": {
        function: "packages/functions/src/content.getPosts",
        authorizer: "lambdaUser",
      },
      "POST   /content": {
        function: "packages/functions/src/content.postPost",
        authorizer: "lambdaAdmin",
      },
      "GET    /content/{id}": {
        function: "packages/functions/src/content.getPost",
        authorizer: "lambdaUser",
      },
      "PUT    /content/{id}": {
        function: "packages/functions/src/content.updatePost",
        authorizer: "lambdaAdmin",
      },
      "DELETE /content/{id}": {
        function: "packages/functions/src/content.delete",
        authorizer: "lambdaAdmin",
      },
    },
  });

  const apiUser = new Api(stack, "apiContentUser", {
    defaults: {
      function: {
        bind: [tableUserContent],
      },
      authorizer: "lambda",
    },
    authorizers: {
      lambda: {
        type: "lambda",
        responseTypes: ["simple"],
        function: userAuth,
      },
    },
    routes: {
      "GET    /contentUser": "packages/functions/src/content.getPosts",
      "POST   /contentUser": "packages/functions/src/content.postPost",
      "GET    /contentUser/{id}": "packages/functions/src/content.getPost",
      "PUT    /contentUser/{id}": "packages/functions/src/content.updatePost",
      "DELETE /contentUser/{id}": "packages/functions/src/content.delete",
    },
  });

  const apiPublic = new Api(stack, "apiContentPublic", {
    defaults: {
      function: {
        bind: [tableUserContent, tableAdminContent],
      },
    },
    routes: {
      "GET    /content": "packages/functions/src/content.getPosts",
      "GET    /content/{id}": "packages/functions/src/content.getPost",
    },
  });

  // Show the API endpoint and other info in the output
  stack.addOutputs({
    UserContentApiEndpoint: apiUser.url,
    AdminContentApiEndpoint: apiAdmin.url,
    PublicContentApiEndpoint: apiPublic.url,
  });
}
