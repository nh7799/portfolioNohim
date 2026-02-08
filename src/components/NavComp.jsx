import { useRef } from "react";

export default function NavComp({ target, id, text, icon, onClick }) {
  function handleClick(e) {
    onClick();
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
      <div className="hover:scale-90 transition-all">
        <span className="hidden md:inline mr-1"> {icon}</span>

        <a href={id} className=" rounded-lg" onClick={handleClick}>
          {text}
        </a>
      </div>
    </>
  );
}
