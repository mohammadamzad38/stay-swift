import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { usersModel } from "./models/users-models";
import Facebook from "next-auth/providers/facebook";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import Credentials from "next-auth/providers/credentials";
import mongoClientPromise from "./database/mongoClientPromise";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: MongoDBAdapter(mongoClientPromise, {
    databaseName: process.env.ENVIRONMENT,
  }),

  session: {
    strategy: "jwt",
  },

  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        if (credentials == null) return null;

        try {
          const user = await usersModel.findOne({
            email: credentials.email,
          });

          if (user) {
            const isMatched = user.email === credentials.email;

            if (isMatched) {
              return user;
            }
          }
        } catch (error) {
          console.error(error);
        }
      },
    }),

    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "email, public_profile",
        },
      },
    }),
  ],
});
