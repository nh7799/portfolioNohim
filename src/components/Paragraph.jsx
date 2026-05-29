import Icon from "./Icon";

export default function Paragraph({ className = "", children }) {
  return (
    <div className={`my-4 flex gap-3 text-base font-medium sm:text-lg ${className}`}>
      <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)]">
        <Icon name="plus" />
      </span>
      <p>{children}</p>
    </div>
  );
}
