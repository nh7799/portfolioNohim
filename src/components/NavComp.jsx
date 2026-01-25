import { useRef } from "react";

export default function NavComp({ target, id, text, icon }) {
  function handleClick(e) {
    e.preventDefault();
    const element = useRef(target);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }
  return (
    <>
      <div>
        <span className="hidden md:inline mr-1"> {icon}</span>

        <a href={id} className=" rounded-lg" onClick={handleClick}>
          {text}
        </a>
      </div>
    </>
  );
}
