import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          50: "#F0F4F8",
          100: "#D9E2EC",
          200: "#BCCCDC",
          300: "#9FB3C8",
          400: "#829AB1",
          500: "#627D98",
          600: "#334E68",
          700: "#1D3557",
          800: "#102A43",
          900: "#0B2545",
          950: "#061527",
        },
        gold: {
          50: "#FDFBF7",
          100: "#FAF4E6",
          200: "#F4E5C0",
          300: "#ECD394",
          400: "#DFB758",
          500: "#C59B27",
          600: "#B8860B",
          700: "#9A7210",
          800: "#6B4C0F",
          900: "#50370B",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(197, 155, 39, 0.25)',
        'navy-glow': '0 10px 40px rgba(11, 37, 69, 0.15)',
        'luxury': '0 20px 50px rgba(6, 21, 39, 0.08)',
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
} satisfies Config;
