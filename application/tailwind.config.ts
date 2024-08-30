import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        nsm: { max: "639px" },
        nmd: { max: "767px" },
        nlg: { max: "1023px" },
        nxl: { max: "1279px" },
        n2xl: { max: "1535px" },
        "3xl": "1600px",
        n3xl: { max: "1599px" },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
