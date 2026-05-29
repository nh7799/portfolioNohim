import { useEffect, useState } from "react";
import Button from "./Button";
import Icon from "./Icon";
import NavComp from "./NavComp";

export default function Navigation() {
  const [lightMode, setLightMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", !lightMode);
  }, [lightMode]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { text: "Home", id: "#home", icon: <Icon name="home" /> },
    { text: "About", id: "#about", icon: <Icon name="user" /> },
    { text: "Projects", id: "#projects", icon: <Icon name="book" /> },
    { text: "Skills", id: "#skills", icon: <Icon name="rocket" /> },
    { text: "Contact", id: "#contact", icon: <Icon name="at" /> },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-xl">
      <nav className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#home" className="group inline-flex flex-col leading-none">
            <span className="text-xl font-black tracking-tight sm:text-2xl">Nohim.h</span>
            <span className="mt-0.5 text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent)]">
              ver 1.0
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] p-1 shadow-sm">
            {navItems.map((item) => (
              <NavComp key={item.id} {...item} />
            ))}
          </div>

          {/* Desktop theme buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              className={lightMode ? "bg-[var(--surface-strong)]" : "bg-[var(--accent)] text-white"}
              onClick={() => setLightMode(false)}
            >
              Dark
            </Button>
            <Button
              className={lightMode ? "bg-[var(--accent)] text-white" : "bg-[var(--surface-strong)]"}
              onClick={() => setLightMode(true)}
            >
              Light
            </Button>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              className="px-3 py-2 text-xs"
              onClick={() => setLightMode((prev) => !prev)}
            >
              {lightMode ? "Dark" : "Light"}
            </Button>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--text)] shadow-sm transition hover:border-[var(--focus)]"
            >
              {/* Animated hamburger */}
              <span className="relative flex h-5 w-5 flex-col items-center justify-center gap-1.5">
                <span
                  className={`block h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                    menuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                    menuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            menuOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-sm">
            {navItems.map((item) => (
              <NavComp
                key={item.id}
                {...item}
                onClick={() => setMenuOpen(false)}
                className="w-full justify-start rounded-xl px-4 py-3"
              />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
