import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "main-gradient":
          "radial-gradient(at 27% 37%, #6a82fb 0, transparent 50%), radial-gradient(at 97% 21%, #a3a1ff 0, transparent 50%), radial-gradient(at 52% 99%, #fc5c7d 0, transparent 50%), radial-gradient(at 10% 29%, #4bcffa 0, transparent 50%), radial-gradient(at 97% 96%, #f5a9b8 0, transparent 50%), radial-gradient(at 33% 50%, #68e0cf 0, transparent 50%), radial-gradient(at 79% 53%, #e0c3fc 0, transparent 50%);",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
