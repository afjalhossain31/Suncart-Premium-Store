import fs from "fs/promises";
import path from "path";

export const getProducts = async () => {
  try {
    const filePath = path.join(process.cwd(), "public", "data.json");
    const fileContent = await fs.readFile(filePath, "utf8");
    const cleaned = fileContent.replace(/^\uFEFF/, "");
    const data = JSON.parse(cleaned);
    return data;
  } catch (error) {
    console.error("Error reading data.json from public folder:", error);
    return [];
  }
};
