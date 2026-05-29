import { twMerge } from "tailwind-merge";

export default function NavComp({ id, text, icon, onClick, mobileStyle }) {
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

  if (mobileStyle) {
    return (
      <a
        href={id}
        onClick={handleClick}
        className="flex items-center gap-3 border-b border-[var(--border)] px-5 py-3.5 text-sm font-bold text-[var(--text-soft)] transition last:border-b-0 hover:bg-[var(--surface-strong)] hover:text-[var(--text)] active:bg-[var(--surface-strong)]"
      >
        <span className="text-[var(--accent)]">{icon}</span>
        <span>{text}</span>
      </a>
    );
  }

  return (
    <a
      href={id}
      onClick={handleClick}
      className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold text-[var(--text-soft)] transition hover:bg-[var(--surface-strong)] hover:text-[var(--text)] focus:outline-none focus:ring-4 focus:ring-[var(--ring)] whitespace-nowrap"
    >
      <span className="hidden sm:inline-flex">{icon}</span>
      <span>{text}</span>
    </a>
  );
}
