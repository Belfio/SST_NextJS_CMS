import { ApiHandler } from "sst/node/api";
import { useSession } from "sst/node/auth";

export const main = ApiHandler(async () => {
  let session;
  try {
    session = useSession();
  } catch (error) {
    return {
      isAuthorized: false,
      context: {
        username: "",
      },
    };
  }

  console.log("AUTHORISERRRR", session);

  // Check user is authenticated
  if (session.type !== "user") {
    return {
      isAuthorized: false,
      context: {
        username: "",
      },
    };
  }

  return {
    isAuthorized: true,
    context: {
      username: "user",
    },
  };
});
