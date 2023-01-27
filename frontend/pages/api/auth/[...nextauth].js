import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";
import AWS from "aws-sdk";

const argv = {
  clientId: "27vb0mos1ft3d2lbtqtt8vv8kb",
  clientSecret: "1q4qn1qj6qdn8j7asj60m442qmg29599ap7cfgjqopdtc8fmq8nr",
  issuer: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_nN6E2xB0M",
  domain: "https://sstnextjscms.auth.us-east-1.amazoncognito.com",
  cognitoRegion: "us-east-1",
  userPoolId: "us-east-1_nN6E2xB0M",
  identityPoolId: "us-east-1:36721906-2a4c-43b8-9c0b-f90ba294825a",
};

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CognitoProvider({
      //   clientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
      //   clientSecret: process.env.NEXT_PUBLIC_COGNITO_CLIENT_SECRET,
      //   issuer: process.env.NEXT_PUBLIC_COGNITO_ISSUER,
      //   domain: process.env.NEXT_PUBLIC_COGNITO_DOMAIN,
      clientId: argv.clientId,
      clientSecret: argv.clientSecret,
      issuer: argv.issuer,
      domain: argv.domain,
    }),
    // ...add more providers here
  ],

  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.id_token = account.id_token;
        setCredentials({
          idToken: account.id_token,
          accessToken: account.access_token,
        });
      }

      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      session.idToken = token.id_token;

      return session;
    },
  },
};
export default NextAuth(authOptions);

function setCredentials(userTokens) {
  var logins = {};
  var idToken = userTokens.idToken;
  var accessToken = userTokens.accessToken;

  // Set the region where your identity pool exists (us-east-1, eu-west-1)
  AWS.config.region = argv.cognitoRegion;

  // Configure the credentials provider to use your identity pool
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: argv.identityPoolId,
  });

  // Make the call to obtain credentials
  AWS.config.credentials.get(function () {
    // Credentials will be available when this function is called.
    var accessKeyId = AWS.config.credentials.accessKeyId;
    var secretAccessKey = AWS.config.credentials.secretAccessKey;
    var sessionToken = AWS.config.credentials.sessionToken;
  });

  logins[
    "cognito-idp." + argv.cognitoRegion + ".amazonaws.com/" + argv.userPoolId
  ] = idToken;

  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: argv.identityPoolId,
    Logins: logins,
  });

  AWS.config.credentials.get(function (err) {
    if (err) {
      console.log(err.message ? err.message : err);
      return;
    }
  });
}
