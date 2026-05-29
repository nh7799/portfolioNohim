export default function NavComp({ id, text, icon, onClick }) {
  function handleClick(event) {
    event.preventDefault();
    onClick?.();

    const targetId = id?.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", id);
    }
  }

  return (
    <a
      href={id}
      onClick={handleClick}
      className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold text-[var(--text-soft)] transition hover:bg-[var(--surface)] hover:text-[var(--text)] focus:outline-none focus:ring-4 focus:ring-[var(--ring)]"
    >
      <span className="hidden sm:inline-flex">{icon}</span>
      <span>{text}</span>
    </a>
  );
}
