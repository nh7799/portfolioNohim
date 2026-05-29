import { twMerge } from "tailwind-merge";

export default function BackgroundBox({ text, backgroundColor, icon, isLink, className }) {
  const baseClass = twMerge(
    `${backgroundColor || "bg-[var(--surface)]"} inline-flex w-fit items-center justify-center gap-2 rounded-full border border-[var(--border)] px-3.5 py-2 text-sm font-bold text-[var(--text)] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[var(--focus)] hover:shadow-md`,
    isLink ? "cursor-pointer" : "",
    className,
  );

  const content = (
    <>
      {icon && <span className="text-lg leading-none">{icon}</span>}
      <span>{text}</span>
    </>
  );

  if (isLink) {
    return (
      <a href={isLink} target="_blank" rel="noopener noreferrer" className={baseClass}>
        {content}
      </a>
    );
  }

  return <div className={baseClass}>{content}</div>;
}
