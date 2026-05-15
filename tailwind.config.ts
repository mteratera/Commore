import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Commore Brand Colors
        forest: {
          DEFAULT: "#2D3A2E",
          dark: "#1F2A20",
          light: "#3F4E40",
        },
        cream: {
          DEFAULT: "#F5E6C8",
          warm: "#E8DFD3",
          light: "#FAF8F4",
        },
        sunlight: {
          DEFAULT: "#C8A77B",
          bright: "#E8C089",
          deep: "#A87C3E",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Times New Roman"', "Georgia", "serif"],
        sans: ['"Noto Sans JP"', "system-ui", "sans-serif"],
        mincho: ['"Noto Serif JP"', '"Yu Mincho"', "serif"],
      },
      animation: {
        "fade-in": "fadeIn 1.5s ease-out forwards",
        "fade-up": "fadeUp 1.2s ease-out forwards",
        "shimmer": "shimmer 8s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
