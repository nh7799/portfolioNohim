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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
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
      <nav className="mx-auto w-full max-w-7xl px-4 sm:px-6">

        {/* Top bar — always visible */}
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#home" className="group inline-flex flex-col leading-none shrink-0">
            <span className="text-xl font-black tracking-tight sm:text-2xl">Nohim.h</span>
            <span className="mt-0.5 text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent)]">
              ver 1.0
            </span>
          </a>

          {/* Desktop / tablet nav pill — visible at md and up */}
          <div className="hidden md:flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface)] p-1 shadow-sm overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {navItems.map((item) => (
              <NavComp key={item.id} {...item} />
            ))}
          </div>

          {/* Desktop theme toggle — visible at md and up */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
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

          {/* Mobile controls — only below md */}
          <div className="flex items-center gap-2 md:hidden">
            <Button className="px-3 py-2 text-xs" onClick={() => setLightMode((p) => !p)}>
              {lightMode ? "Dark" : "Light"}
            </Button>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((p) => !p)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--text)] transition hover:border-[var(--focus)]"
            >
              <span className="relative flex h-5 w-5 flex-col items-center justify-center gap-[5px]">
                <span className={`block h-0.5 w-full rounded-full bg-current transition-all duration-300 origin-center ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
                <span className={`block h-0.5 w-full rounded-full bg-current transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
                <span className={`block h-0.5 w-full rounded-full bg-current transition-all duration-300 origin-center ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile dropdown — slides down below header */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
            menuOpen ? "max-h-80 opacity-100 pb-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm overflow-hidden">
            {navItems.map((item) => (
              <NavComp
                key={item.id}
                {...item}
                onClick={() => setMenuOpen(false)}
                mobileStyle
              />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
