import { SSTConfig } from "sst";
import { AuthStack } from "./stacks/authStack";
import { ContentStack } from "./stacks/contentStack";

export default {
  config(_input) {
    return {
      name: "sst-google",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(AuthStack);
    app.stack(ContentStack);
  },
} satisfies SSTConfig;
