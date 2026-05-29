import Icon from "./Icon";
import useTheme from "../hooks/useTheme.jsx";

export default function ThemeToggle({ compact = false }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`theme-switch ${compact ? "theme-switch-compact" : ""}`}
      role="group"
      aria-label="Colour theme"
    >
      <button
        type="button"
        className={`theme-switch-btn ${theme === "light" ? "active" : ""}`}
        aria-pressed={theme === "light"}
        aria-label="Light mode"
        title="Light mode"
        onClick={() => setTheme("light")}
      >
        <Icon name="sun" className="theme-switch-icon" />
        {!compact && <span>Light</span>}
      </button>
      <button
        type="button"
        className={`theme-switch-btn ${theme === "dark" ? "active" : ""}`}
        aria-pressed={theme === "dark"}
        aria-label="Dark mode"
        title="Dark mode"
        onClick={() => setTheme("dark")}
      >
        <Icon name="moon" className="theme-switch-icon" />
        {!compact && <span>Dark</span>}
      </button>
    </div>
  );
}
