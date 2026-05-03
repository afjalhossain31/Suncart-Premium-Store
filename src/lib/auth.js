import { betterAuth } from "better-auth";
import { mongoAdapter } from "better-auth/adapters/mongo";
import { MongoClient } from "mongodb";

// Initialize MongoDB connection
const client = new MongoClient(process.env.MONGODB_URI || "mongodb://localhost:27017");
const db = client.db("suncart-store");

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  database: mongoAdapter(db),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "dummy",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "dummy",
    },
  },
});
