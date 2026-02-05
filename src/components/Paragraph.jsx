import Icon from "./Icon";

export default function Paragraph({ className, children }) {
  return (
    <div className={`font-medium flex gap-3 flex-row my-5 text-xl ${className}`}>
      <Icon name={"plus"} className=" p-2 rounded-lg "></Icon>
      <div className="text-lg md:text-xl">
        <p>{children}</p>{" "}
      </div>
    </div>
  );
}
