import { twMerge } from "tailwind-merge";

export default function Button({ className, children, onClick, onSubmit, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
      className={twMerge(
        "inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-2.5 text-sm font-bold text-[var(--text)] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[var(--focus)] hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[var(--ring)]",
        className,
      )}
    >
      {children}
    </button>
  );
}
