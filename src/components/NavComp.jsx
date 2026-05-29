import { useRef } from "react";

export default function NavComp({ target, id, text, icon, onClick }) {
  function handleClick(e) {
    onClick?.();
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
      <div className="transition-all hover:scale-90">
        <a
          href={id}
          className="flex items-center justify-center gap-2 rounded-lg py-2 transition-colors md:justify-start md:py-0"
          onClick={handleClick}
        >
          <span className="inline md:mr-1">{icon}</span>
          {text}
        </a>
      </div>
    </>
  );
}
