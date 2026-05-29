import { twMerge } from "tailwind-merge";

export default function Button({ className, children, onClick, type }) {
  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      className={twMerge("btn", className)}
    >
      {children}
    </button>
  );
}
