import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";

const DB_PATH = path.join(process.cwd(), "users.json");

// Initialize users file
function initDB() {
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify({ users: [] }, null, 2));
  }
}

function getUsers() {
  initDB();
  const data = fs.readFileSync(DB_PATH, "utf8");
  return JSON.parse(data);
}

function saveUsers(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

export const authAPI = {
  async signUp(email, password, name, image) {
    try {
      const users = getUsers();
      
      // Check if user already exists
      if (users.users.find((u) => u.email === email)) {
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
      
      users.users.push(newUser);
      saveUsers(users);
      
      return { data: newUser };
    } catch (error) {
      return { error: error.message };
    }
  },

  async signIn(email, password) {
    try {
      const users = getUsers();
      const user = users.users.find((u) => u.email === email);
      
      if (!user) {
        return { error: "Invalid email or password" };
      }
      
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return { error: "Invalid email or password" };
      }
      
      // Return user without password
      const { password: _, ...userWithoutPassword } = user;
      return { data: userWithoutPassword };
    } catch (error) {
      return { error: error.message };
    }
  },

  getSession(email) {
    try {
      const users = getUsers();
      const user = users.users.find((u) => u.email === email);
      
      if (!user) {
        return { data: null };
      }
      
      const { password: _, ...userWithoutPassword } = user;
      return { data: userWithoutPassword };
    } catch (error) {
      return { data: null };
    }
  },
};
