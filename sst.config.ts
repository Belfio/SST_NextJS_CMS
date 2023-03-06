import { SSTConfig } from "sst";
import { ExampleStack } from "./stacks/stack";

export default {
  config(_input) {
    return {
      name: "sst-google",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(ExampleStack);
  },
} satisfies SSTConfig;
