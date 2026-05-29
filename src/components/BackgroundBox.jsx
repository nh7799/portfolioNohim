import { twMerge } from "tailwind-merge";

const variants = {
  default: "border-border bg-gold-muted text-text hover:border-border-strong",
  accent: "premium-btn border-transparent text-accent-foreground shadow-sm",
  surface:
    "border-border bg-surface text-text hover:border-gold hover:bg-surface-hover",
  muted: "border-border bg-elevated text-text-secondary hover:text-gold",
};

export default function BackgroundBox({
  text,
  backgroundColor,
  icon,
  isLink,
  className,
  variant = "default",
}) {
  const resolvedVariant =
    backgroundColor?.includes("blue") || backgroundColor?.includes("bg-blue")
      ? "accent"
      : backgroundColor?.includes("gray") || backgroundColor?.includes("bg-gray")
        ? "surface"
        : variant;

  return (
    <div
      className={twMerge(
        "flex w-fit items-center justify-center rounded-md border px-3 py-2 text-sm font-semibold tracking-wide transition-all duration-200",
        variants[resolvedVariant] ?? variants.default,
        backgroundColor,
        isLink ? "cursor-pointer" : null,
        className,
      )}
    >
      {icon && <span className="mr-2 text-lg text-gold">{icon}</span>}
      <span>
        {isLink ? (
          <a
            href={isLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Opens in a new tab"
            className="text-inherit no-underline hover:text-inherit"
          >
            {text}
          </a>
        ) : (
          text
        )}
      </span>
    </div>
  );
}
