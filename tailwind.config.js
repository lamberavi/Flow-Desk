/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F5EE",
        ink: "#16211D",
        forest: "#1F5C4E",
        "forest-dark": "#143F35",
        "forest-light": "#E6F0EA",
        surface: "#FFFDF8",
        line: "#DCE3DF",
        muted: "#5D685F",
        amber: "#E8A33D",
        "amber-dark": "#C78623",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drawline: {
          "0%": { strokeDashoffset: "300" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease both",
        drawline: "drawline 1s ease-out both",
      },
    },
  },
  plugins: [],
};
