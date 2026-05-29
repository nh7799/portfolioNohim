/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        elevated: "var(--bg-elevated)",
        surface: "var(--surface)",
        muted: "var(--muted)",
        border: "var(--border)",
        text: "var(--text)",
        "text-secondary": "var(--text-secondary)",
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          muted: "var(--accent-muted)",
          foreground: "var(--accent-foreground)",
        },
      },
    },
  },
  plugins: [],
};
