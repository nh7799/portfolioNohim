import { use, useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import TechStackBox from "./TechStackBox";
import Button from "./Button";
import scrollIntoView from "scroll-into-view-if-needed";

export default function Carousal({ data = [] }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const lastItem = data.length - 1;

  const containerRef = useRef(null);
  const scrollRef = useRef([]);

  function scrollTo(index) {
    const container = containerRef.current;
    scrollIntoView(scrollRef.current[index], {
      boundary: container,
      behavior: "smooth",
      inline:"center",
      block:"nearest"
    });
  }

  function updateActiveSlide(direction) {
    let newIndex;
    if (direction === "left") {
      newIndex = activeSlide - 1 < 0 ? lastItem : activeSlide - 1;
    } else if (direction === "right") {
      newIndex = activeSlide + 1 > lastItem ? 0 : activeSlide + 1;
    }
    setActiveSlide(newIndex); // does not immediately change the activeSlide
    // therefore react state activeSlide cannot be used when updating to the scrollIntoView
    scrollTo(newIndex);
  }

  useEffect(() => {
    scrollTo(activeSlide);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => updateActiveSlide("right"), 4000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="flex w-full items-center overflow-hidden md:p-5">
        <div className="shrink-0">
          <Icon
            name={"leftArrow"}
            className="cursor-pointer text-2xl text-gold transition-colors hover:text-gold-light sm:text-3xl md:text-4xl"
            func={() => updateActiveSlide("left")}
          />
        </div>
        <div
          className="flex min-w-0 flex-1 gap-2 overflow-x-auto scroll-smooth p-2 sm:gap-4 sm:p-4 md:p-6"
          ref={containerRef}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {data.map(
            (
              { id, title, description, imageUrl, techStack, projectLink },
              i,
            ) => (
              <div
                  key={id ?? i}
                  className={`${i !== activeSlide ? "pointer-events-none opacity-30 grayscale" : "scale-95 opacity-100 shadow-2xl ring-1 ring-gold/30 md:scale-105"} card-comp z-20 mx-1 flex w-[min(85vw,20rem)] shrink-0 flex-col gap-3 rounded-xl p-4 transition-all sm:w-[min(80vw,22rem)] md:mx-2 md:w-80`}
                  ref={(el) => (scrollRef.current[i] = el)}
                >
                  {" "}
                  <h2 className="font-display text-base font-semibold text-gold sm:text-lg md:text-xl">
                    {title}
                  </h2>
                  {{ imageUrl } && (
                    <div
                      className={`bg-no-repeat bg-cover bg-center rounded-sm w-full aspect-video`}
                      style={{ backgroundImage: `url(${imageUrl})` }}
                    ></div>
                  )}
                  <p className="text-sm font-light text-justify sm:text-base">{description}</p>
                  <div className="flex gap-3 flex-wrap">
                    {techStack.map((item) => (
                      <TechStackBox>{item}</TechStackBox>
                    ))}
                  </div>
                  <Button className="premium-btn w-fit border-0 p-2 shadow-none">
                    <Icon name={"play"} className="mr-2"></Icon>
                    <a href={projectLink} className="text-inherit no-underline">
                      See More Details
                    </a>
                  </Button>
                </div>
            ),
          )}
        </div>
        <div className="shrink-0">
          <Icon
            name={"rightArrow"}
            className="cursor-pointer text-2xl text-gold transition-colors hover:text-gold-light sm:text-3xl md:text-4xl"
            func={() => updateActiveSlide("right")}
          />
        </div>
      </div>
    </>
  );
}
