import bcrypt from "bcryptjs";
import { MongoClient } from "mongodb";

let mongoClient;
let db;
const memoryUsers = [];
let mongoRetryAfter = 0;

function isMongoConnectionError(error) {
  const message = String(error?.message || "");
  return (
    message.includes("MongoServerSelectionError") ||
    message.includes("ERR_SSL_TLSV1_ALERT_INTERNAL_ERROR") ||
    message.includes("tlsv1 alert") ||
    message.includes("ECONNREFUSED") ||
    message.includes("ENOTFOUND") ||
    message.includes("Mongo temporarily disabled")
  );
}

function sanitizeUser(user) {
  const { password: _password, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

async function connectDB() {
  if (Date.now() < mongoRetryAfter) {
    throw new Error("Mongo temporarily disabled");
  }

  if (!db) {
    const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
    mongoClient = new MongoClient(uri, {
      maxPoolSize: 10,
      minPoolSize: 2,
      serverSelectionTimeoutMS: 3000,
      connectTimeoutMS: 5000,
    });
    try {
      await mongoClient.connect();
      db = mongoClient.db("suncart-store");
      mongoRetryAfter = 0;
    } catch (error) {
      mongoRetryAfter = Date.now() + 60 * 1000;
      console.error("MongoDB connection failed:", error);
      throw error;
    }
  }
  return db;
}

export const authAPI = {
  async signUp(email, password, name, image) {
    try {
      const database = await connectDB();
      const usersCollection = database.collection("users");
      
      // Check if user already exists
      const existingUser = await usersCollection.findOne({ email });
      if (existingUser) {
        return { error: "User already exists" };
      }
      
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
      
      const newUser = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        name,
        image: image || null,
        password: hashedPassword,
        createdAt: new Date().toISOString(),
      };
      
      const result = await usersCollection.insertOne(newUser);
      
      return { data: sanitizeUser({ ...newUser, _id: result.insertedId }) };
    } catch (error) {
      if (!isMongoConnectionError(error)) {
        return { error: error.message };
      }

      // Fallback for local development when Atlas is unreachable.
      const existingUser = memoryUsers.find((user) => user.email === email);
      if (existingUser) {
        return { error: "User already exists" };
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = {
        id: Math.random().toString(36).substring(2, 11),
        email,
        name,
        image: image || null,
        password: hashedPassword,
        createdAt: new Date().toISOString(),
      };

      memoryUsers.push(newUser);
      return { data: sanitizeUser(newUser) };
    }
  },

  async signIn(email, password) {
    try {
      const database = await connectDB();
      const usersCollection = database.collection("users");
      
      const user = await usersCollection.findOne({ email });
      if (!user) {
        return { error: "User not found" };
      }
      
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return { error: "Invalid password" };
      }
      
      // Return user without password
      return { data: sanitizeUser(user) };
    } catch (error) {
      if (!isMongoConnectionError(error)) {
        return { error: error.message };
      }

      const user = memoryUsers.find((storedUser) => storedUser.email === email);
      if (!user) {
        return { error: "User not found" };
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return { error: "Invalid password" };
      }

      return { data: sanitizeUser(user) };
    }
  },

  getSession(email) {
    // Sessions are handled by Better Auth via MongoDB
    return { data: null };
  }
};
