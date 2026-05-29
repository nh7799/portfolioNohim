import Paragraph from "./Paragraph"

export default function Card({ className, title, text, children }) {
  return (
    <>
      {" "}
      <div className={`card-comp ${className} my-3 max-w-100 rounded-xl`}>
        <div className="mb-3 bg-d w-fit p-1 font-extrabold underline">{title}</div>
        <Paragraph>{text}</Paragraph>
        {children}
      </div>
    </>
  );
}
