import Paragraph from "./Paragraph"

export default function Card({ className, title, text, children }) {
  return (
    <>
      {" "}
      <div className={`${className} max-w-100 shadow-xl card bg-accent border my-3`}>
        <div className="mb-3 bg-d w-fit p-1 font-extrabold underline">{title}</div>
        <Paragraph>{text}</Paragraph>
        {children}
      </div>
    </>
  );
}
