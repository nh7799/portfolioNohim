import Icon from "./Icon";

export default function Paragraph({ className = "", children }) {
  return (
    <div className={`my-3 flex gap-3 sm:my-4 ${className}`}>
      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)] sm:h-7 sm:w-7">
        <Icon name="plus" />
      </span>
      <p className="text-sm leading-relaxed sm:text-base lg:text-lg">{children}</p>
    </div>
  );
}
