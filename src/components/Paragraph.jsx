import Icon from "./Icon";



export default function Paragraph({ className, children }) {
  return (
    <div className={`font-light flex gap-3 flex-row my-5 text-xl ${className}`}>
        <Icon name={"check"} className=" p-2 rounded-lg "></Icon>
      <div className="text-lg md:text-xl">
        {children}</div>
    </div>
  );
}
