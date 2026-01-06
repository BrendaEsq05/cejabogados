import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B2C4D",
        gold: "#C9A24D",
        gray: "#6B7280",
        bg: "#F7F8FA",
      },
    },
  },
  plugins: [],
};

export default config;

