import { ApiHandler } from "sst/node/api";
import { useSession } from "sst/node/auth";

export const handler = ApiHandler(async () => {
  // Is there a Session at all?
  let session;
  try {
    session = useSession();
    console.log("Session:", session);
  } catch (error) {
    return {
      isAuthorized: false,
      context: {
        username: "",
      },
    };
  }

  // Is the session valid? Do we have such user? Does the user have the right role?
  if (session.type !== "user") {
    return {
      isAuthorized: false,
      context: {
        username: "",
      },
    };
  }

  // All good!
  return {
    isAuthorized: true,
    context: {
      username: session.properties.userID,
    },
    evt: {},
    ctx: {},
  };
});
