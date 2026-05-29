import { useEffect, useState } from "react";
import Icon from "./Icon";
import NavComp from "./NavComp";

const navLinks = [
  { text: "Home", id: "#home", icon: "home" },
  { text: "About", id: "#about", icon: "user" },
  { text: "Projects", id: "#projects", icon: "book" },
  { text: "Skills", id: "#skills", icon: "rocket" },
  { text: "Contact Me", id: "#contact", icon: "at" },
];

export default function Navigation() {
  const [lightMode, setLightMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(
    () =>
      lightMode
        ? document.documentElement.classList.remove("dark")
        : document.documentElement.classList.add("dark"),
    [lightMode],
  );

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <header className="sticky top-0 z-50 my-4 w-full rounded-xl border border-border bg-elevated/90 p-3 shadow-md backdrop-blur-md">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="flex items-center justify-between gap-3 md:flex-1">
          <h1 className="text-center text-xl font-semibold sm:text-2xl">
            <a href="/" className="font-display brand-mark text-2xl sm:text-3xl">
              Nohim.h
            </a>
            <sup>
              <span className="premium-pill ml-1 inline-block rounded-full px-2 py-0.5 text-[0.65rem] font-semibold tracking-wider uppercase">
                v1.0
              </span>
            </sup>
            <div className="theme-toggle mx-auto mt-2 w-fit">
              <button
                type="button"
                className={lightMode ? "active" : ""}
                onClick={() => setLightMode(true)}
              >
                Light
              </button>
              <button
                type="button"
                className={!lightMode ? "active" : ""}
                onClick={() => setLightMode(false)}
              >
                Dark
              </button>
            </div>
          </h1>

          <button
            type="button"
            className="rounded-lg border border-border bg-surface p-2 text-gold md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "close" : "menu"} className="text-2xl" />
          </button>
        </div>

        <nav
          className={`nav flex w-full flex-col items-stretch gap-3 text-sm font-medium sm:gap-4 sm:text-base md:flex-2 md:flex-row md:justify-center md:py-0 md:text-base ${
            menuOpen ? "flex" : "hidden md:flex"
          }`}
        >
          {navLinks.map(({ text, id, icon }) => (
            <NavComp
              key={id}
              text={text}
              id={id}
              icon={<Icon name={icon} className="text-gold" />}
              onClick={() => setMenuOpen(false)}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}
