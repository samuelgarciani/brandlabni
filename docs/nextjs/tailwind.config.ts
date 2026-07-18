import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#023047",
        "navy-2": "#0b3c53",
        ink: "#02222f",
        orange: "#fb8500",
        blue: "#219ebc",
        sky: "#8ecae6",
        yellow: "#ffb703",
        red: "#e52e31",
        paper: "#fbfaf7",
        sand: "#e9e6df",
      },
      fontFamily: {
        sans: ["var(--font-onest)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        marq: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        marq: "marq 32s linear infinite",
        floaty: "floaty 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
