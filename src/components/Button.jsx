import { twMerge } from "tailwind-merge";

export default function Button({ className, children }) {
  return (
    <button
      className={twMerge(
        "border border-deep shadow-lg bg-accent p-3 rounded-lg text-deep hover:bg-amber-500 transition-all ",
        className,
      )}
    >
      {children}
    </button>
  );
}
