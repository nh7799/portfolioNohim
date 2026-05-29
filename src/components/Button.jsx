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
        "border shadow-lg  p-3 rounded-lg  transition-all ",
        className,
      )}
    >
      {children}
    </button>
  );
}
