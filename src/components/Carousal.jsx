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
      <div className="flex items-center md:p-5 overflow-hidden">
        <div>
          <Icon
            name={"leftArrow"}
            className="text-4xl cursor-pointer"
            func={() => updateActiveSlide("left")}
          />
        </div>
        <div
          className="flex gap-2 md:gap-4 overflow-x-scroll p-10 "
          ref={containerRef}
          style={{
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {data.map(
            (
              { id, title, description, imageUrl, techStack, projectLink },
              i,
            ) => (
              <>
                <div
                  key={i}
                  className={`${i !== activeSlide ? " opacity-30 grayscale pointer-events-none" : "shadow-2xl opacity-100 scale-95 md:scale-105"} flex-1 mx-2  card-comp z-20 shadow-xl flex flex-col gap-3 p-3 rounded-lg border border-gray-600 transition-all`}
                  ref={(el) => (scrollRef.current[i] = el)}
                  style={{ minWidth: "350px" }} 
                >
                  {" "}
                  <h2 className="font-extrabold md:text-xl">{title}</h2>
                  {{ imageUrl } && (
                    <div
                      className={`bg-no-repeat bg-cover bg-center rounded-sm w-full aspect-video`}
                      style={{ backgroundImage: `url(${imageUrl})` }}
                    ></div>
                  )}
                  <p className="font-light text-justify">{description}</p>
                  <div className="flex gap-3 flex-wrap">
                    {techStack.map((item) => (
                      <TechStackBox>{item}</TechStackBox>
                    ))}
                  </div>
                  <Button className="w-fit p-2 rounded-sm  border-0 shadow-none">
                    <Icon name={"play"} className="mr-2"></Icon>
                    <a href={projectLink}>See More Details</a>
                  </Button>
                </div>
              </>
            ),
          )}
        </div>
        <div>
          <Icon
            name={"rightArrow"}
            className="text-4xl cursor-pointer"
            func={() => updateActiveSlide("right")}
          />
        </div>
      </div>
    </>
  );
}
