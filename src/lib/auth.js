import { betterAuth } from "better-auth";
import { mongoAdapter } from "better-auth/adapters/mongo";
import { MongoClient } from "mongodb";

// Global MongoDB connection (reuse single connection)
let mongoClient;
let db;

async function connectDB() {
  if (!db) {
    const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
    mongoClient = new MongoClient(uri, {
      maxPoolSize: 10,
      minPoolSize: 2,
    });
    try {
      await mongoClient.connect();
      db = mongoClient.db("suncart-store");
      console.log("MongoDB connected successfully");
    } catch (error) {
      console.error("MongoDB connection failed:", error);
      throw error;
    }
  }
  return db;
}

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  database: mongoAdapter({
    get db() {
      if (!db) throw new Error("Database not initialized. Call connectDB first.");
      return db;
    },
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },
  trustHost: true,
});

// Initialize database on module load
connectDB().catch(console.error);
