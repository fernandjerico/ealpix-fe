import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-color": "#4F46E5",
        "primary-1-color": "#EDECFC",
        "primary-13-color": "#030098",
        "primary-linear-color": "#A7A2F2",
        "border-color": "#E5E5E5",
        "black-color": "#0D0D0D",
        "primary-text-color": "#282828",
        "secondary-text-color": "#5E5E5E",
      },
    },
  },
  plugins: [],
};
export default config;
