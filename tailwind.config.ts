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
        road: ["var(--font-road)"],
        rock: ["var(--font-rock)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        "1440": "1440px",
        "1xl": "628px",
      },

      screens: {
        desktop: "1360px",
      },
      colors: {
        "gray-medium": "#514B4B",
        gray: "#868686",
        secondary: "#FCC26B",
        primary: "#1B1B1B",
      },
      backgroundImage: {
        "bg-hero": "url('/bg-hero.png')",
      },
    },
  },
  plugins: [],
};
export default config;
