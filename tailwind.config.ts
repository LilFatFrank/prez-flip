import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        microgamma: ["MicrogammaMedium", "sans-serif"],
        josefinsans: ["JosefinSans-Medium", "sans-serif"],
      },
      colors: {
        "bg-blue": "#0044C9",
        white: "#FFFFFF",
        "app-red": "#D71F27",
        "black": "#000000",
        "footer": "#3A80FE"
      },
    },
  },
  plugins: [],
};
export default config;
