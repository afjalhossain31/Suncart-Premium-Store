import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  plugins: [require("daisyui")],
  // @ts-ignore - daisyui config
  daisyui: {
    themes: ["light"]
  }
};

export default config;
