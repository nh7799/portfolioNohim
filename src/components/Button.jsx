import { twMerge } from "tailwind-merge";

export default function Button({ className, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "border shadow-lg  p-3 rounded-lg  transition-all ",
        className,
      )}
    >
      {children}
    </button>
  );
}
