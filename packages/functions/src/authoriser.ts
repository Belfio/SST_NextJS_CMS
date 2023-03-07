import { APIGatewayProxyStructuredResultV2 } from "aws-lambda/trigger/api-gateway-proxy";
import { ApiHandler } from "sst/node/api";
import { useSession } from "sst/node/auth";
export const user = ApiHandler(
  async (evt, ctx): Promise<APIGatewayProxyStructuredResultV2> => {
    // Is there a Session at all?
    let session;
    try {
      session = useSession();
      console.log("Session:", session);
    } catch (error) {
      return {
        isAuthorized: false,
        context: {
          email: "",
          userId: "",
        },
      } as APIGatewayProxyStructuredResultV2;
    }

    // Is the session valid? Do we have such user? Does the user have the right role?
    if (session.type !== "user") {
      return {
        isAuthorized: false,
        context: {
          userId: "",
          email: "",
        },
      } as APIGatewayProxyStructuredResultV2;
    }

    // All good!
    return {
      isAuthorized: true,
      context: {
        email: session.properties.email,
        userId: session.properties.userId,
      },
    } as APIGatewayProxyStructuredResultV2;
  }
);

export const admin = ApiHandler(
  async (evt, ctx): Promise<APIGatewayProxyStructuredResultV2> => {
    // Is there a Session at all?
    let session;
    try {
      session = useSession();
      console.log("Session:", session);
    } catch (error) {
      return {
        isAuthorized: false,
        context: {
          email: "",
          userId: "",
        },
      } as APIGatewayProxyStructuredResultV2;
    }

    // Is the session valid? Do we have such user? Does the user have the right role?
    if (session.type !== "user") {
      return {
        isAuthorized: false,
        context: {
          userId: "",
          email: "",
        },
      } as APIGatewayProxyStructuredResultV2;
    }

    // All good!
    return {
      isAuthorized: true,
      context: {
        email: session.properties.email,
        userId: session.properties.userId,
      },
    } as APIGatewayProxyStructuredResultV2;
  }
);
