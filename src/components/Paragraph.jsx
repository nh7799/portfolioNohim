import Icon from "./Icon";

export default function Paragraph({ className, children }) {
  return (
    <div className={`my-4 flex flex-row gap-2 font-medium sm:my-5 sm:gap-3 ${className}`}>
      <Icon
        name={"plus"}
        className="shrink-0 rounded-lg p-1 text-gold sm:p-2"
      ></Icon>
      <div className="text-base leading-relaxed sm:text-lg md:text-xl">
        <p>{children}</p>{" "}
      </div>
    </div>
  );
}
