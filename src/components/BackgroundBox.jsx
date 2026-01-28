import { twMerge } from "tailwind-merge";

export default function BackgroundBox({
  text,
  backgroundColor,
  icon,
  isLink,
  className,
}) {
  return (
    <div
      className={twMerge(
        `${backgroundColor || "bg-deep"}  shadow-sm flex justify-center items-center px-3 py-2 rounded-sm font-bold text-light w-fit p-2 hover:opacity-80 ${isLink ? "cursor-pointer" : null}`,
        className,
      )}
    >
      {icon && <span className="mr-1 text-2xl">{icon}</span>}
      <span>
        {" "}
        {isLink ? (
          <a
            href={isLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Opens in a new tab"
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
