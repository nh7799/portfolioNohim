import { useEffect, useState } from "react";
import Button from "./Button";
import Icon from "./Icon";
import NavComp from "./NavComp";

export default function Navigation() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", !lightMode);
  }, [lightMode]);

  const navItems = [
    { text: "Home", id: "#home", icon: <Icon name="home" /> },
    { text: "About", id: "#about", icon: <Icon name="user" /> },
    { text: "Projects", id: "#projects", icon: <Icon name="book" /> },
    { text: "Skills", id: "#skills", icon: <Icon name="rocket" /> },
    { text: "Contact", id: "#contact", icon: <Icon name="at" /> },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="group inline-flex flex-col leading-none">
            <span className="text-xl font-black tracking-tight sm:text-2xl">Nohim.h</span>
            <span className="mt-1 text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent)]">
              ver 1.0
            </span>
          </a>

          <div className="flex items-center gap-2 lg:hidden">
            <Button
              className="px-3 py-2 text-xs"
              onClick={() => setLightMode((prev) => !prev)}
            >
              {lightMode ? "Dark" : "Light"}
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto rounded-full border border-[var(--border)] bg-[var(--surface)] p-1 shadow-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navItems.map((item) => (
            <NavComp key={item.id} {...item} />
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
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
      </nav>
    </header>
  );
}
