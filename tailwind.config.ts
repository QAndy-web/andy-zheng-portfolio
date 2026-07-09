import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05070c",
        navy: "#071225",
        steel: "#8fa0b8",
        line: "rgba(255,255,255,0.12)",
        gold: "#d7b46a",
        cobalt: "#7aa7ff",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        glow: "0 24px 90px rgba(122, 167, 255, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
