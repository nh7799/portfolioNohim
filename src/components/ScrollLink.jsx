import { scrollToSection } from "../lib/scrollToSection";

export default function ScrollLink({
  to,
  children,
  className = "",
  onBeforeScroll,
}) {
  const sectionId = String(to).replace(/^#/, "");

  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    onBeforeScroll?.();
    scrollToSection(sectionId);
  }

  return (
    <a href={`#${sectionId}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
