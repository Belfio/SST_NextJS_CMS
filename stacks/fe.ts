import { StackContext, NextjsSite, StaticSite } from "sst/constructs";

export function FEStack({ stack, app }: StackContext) {
  const site = new NextjsSite(stack, "Site", {
    path: "frontend",
    environment: {
      // Pass the table details to our app
      REGION: app.region,
      //   TABLE_NAME: table.tableName,
    },
  });

  const staticSite = new StaticSite(stack, "StaticSite", {
    path: "site",
    environment: {
      VITE_APP_API_URL:
        "https://kddj531tsd.execute-api.us-east-1.amazonaws.com",
      // VITE_APP_API_URL: api.url,
      buildCommand: "npm run build", // or "yarn build"

      // buildOutput: "dist",
    },
  });

  // Show the API endpoint and other info in the output
  stack.addOutputs({
    URL: site.url || "not found",
  });
}
