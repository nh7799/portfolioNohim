import { twMerge } from "tailwind-merge";

export default function Button({
  className,
  children,
  onClick,
  onSubmit,
  type,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
      className={twMerge(
        "rounded-lg border border-border bg-surface px-4 py-2.5 font-semibold text-text shadow-sm transition-all duration-200 hover:border-gold hover:bg-surface-hover",
        className,
      )}
    >
      {children}
    </button>
  );
}
