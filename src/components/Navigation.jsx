import { useEffect, useState } from "react";
import Icon from "./Icon";
import NavComp from "./NavComp";
import ThemeToggle from "./ThemeToggle";
import useActiveSection from "../hooks/useActiveSection";
import useBodyScrollLock from "../hooks/useBodyScrollLock";
import { heroLinks } from "../data/snapshot";
import { scrollToSection } from "../lib/scrollToSection";

const navLinks = [
  { text: "Snapshot", id: "#snapshot" },
  { text: "Projects", id: "#projects" },
  { text: "Skills", id: "#skills" },
  { text: "Academic", id: "#academic" },
  { text: "About", id: "#about" },
  { text: "Contact", id: "#contact" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection();

  useBodyScrollLock(menuOpen);

  useEffect(() => {
    const onResize = () => setMenuOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <a
            href="#home"
            className="site-logo"
            title="Nohim Hasitha"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            Nohim Hasitha
          </a>

          <nav className="desktop-nav" aria-label="Primary">
            {navLinks.map(({ text, id }) => (
              <NavComp key={id} text={text} id={id} active={active} />
            ))}
          </nav>

          <div className="header-actions">
            <div className="header-actions-desktop">
              <ThemeToggle />
              <a
                href={heroLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-icon-only btn-github"
                aria-label="GitHub profile"
                title="GitHub"
              >
                <Icon name="github" />
                <span className="btn-github-label">GitHub</span>
              </a>
            </div>

            <div className="header-actions-mobile">
              <ThemeToggle compact />
              <button
                type="button"
                className="menu-toggle"
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((o) => !o)}
              >
                <Icon name={menuOpen ? "close" : "menu"} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`mobile-drawer-backdrop ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
        onClick={close}
      />

      <aside
        id="mobile-nav"
        className={`mobile-drawer ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen || undefined}
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="text-sm font-semibold text-text">Menu</span>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Close menu"
            onClick={close}
          >
            <Icon name="close" />
          </button>
        </div>

        <p className="drawer-theme-label">Appearance</p>
        <ThemeToggle />

        <nav className="mt-6 flex flex-col gap-0.5" aria-label="Mobile">
          <NavComp text="Home" id="#home" active={active} onClick={close} />
          {navLinks.map(({ text, id }) => (
            <NavComp
              key={id}
              text={text}
              id={id}
              active={active}
              onClick={close}
            />
          ))}
        </nav>

        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-6">
          <a
            href={heroLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline w-full"
          >
            GitHub
          </a>
          <a
            href={heroLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline w-full"
          >
            LinkedIn
          </a>
          <a href={heroLinks.cv} className="btn btn-primary w-full">
            Download CV
          </a>
        </div>
      </aside>
    </>
  );
}
