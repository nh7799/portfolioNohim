export default function NavComp({ id, text, active, onClick, className = "" }) {
  const sectionId = id.replace("#", "");

  function handleClick(e) {
    onClick?.();
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <a
      href={id}
      onClick={handleClick}
      className={`nav-link ${active === sectionId ? "nav-link-active" : ""} ${className}`}
      aria-current={active === sectionId ? "page" : undefined}
    >
      {text}
    </a>
  );
}
