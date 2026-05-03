import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { dash, sentinel } from "@better-auth/infra";
import { organization } from "better-auth/plugins";

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is not defined in .env file");
}

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("suncart-auth");

export const auth = betterAuth({
  trustedOrigins: ["http://localhost:3000", "https://suncart-store.vercel.app"],
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),
  plugins: [
    dash(),
    sentinel(),
    organization()
  ],
});
