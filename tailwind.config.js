/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        background: "var(--bg)",
        surface: "var(--surface)",
        muted: "var(--muted)",
        border: "var(--border)",
        ring: "var(--ring)",
        focus: "var(--focus)",
        text: "var(--text)",
        success: "var(--success)",
        info: "var(--info)",
        warning: "var(--warning)",
        danger: "var(--danger)",
      },
    },
  },
  plugins: [],
};
