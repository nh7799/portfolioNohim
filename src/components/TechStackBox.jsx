export default function TechStackBox({ children }) {
  return (
    <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-bold text-[var(--text-soft)]">
      {children}
    </span>
  );
}
