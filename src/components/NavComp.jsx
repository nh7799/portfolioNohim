import {
  scrollToSection,
  scrollToSectionAfterUnlock,
} from "../lib/scrollToSection";

export default function NavComp({ id, text, active, onClick, className = "" }) {
  const sectionId = id.replace("#", "");

  function handleClick(e) {
    e.preventDefault();

    if (onClick) {
      scrollToSectionAfterUnlock(sectionId, onClick);
    } else {
      scrollToSection(sectionId);
    }
  }

  return (
    <a
      href={`#${sectionId}`}
      onClick={handleClick}
      className={`nav-link ${active === sectionId ? "nav-link-active" : ""} ${className}`}
      aria-current={active === sectionId ? "page" : undefined}
    >
      {text}
    </a>
  );
}
