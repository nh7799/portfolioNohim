import { useCallback, useEffect, useRef, useState } from "react";
import scrollIntoView from "scroll-into-view-if-needed";
import Button from "./Button";
import Icon from "./Icon";
import TechStackBox from "./TechStackBox";

export default function Carousal({ data = [] }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef(null);
  const scrollRef = useRef([]);
  const lastItem = data.length - 1;

  const scrollTo = useCallback((index) => {
    const target = scrollRef.current[index];
    const container = containerRef.current;

    if (!target || !container) return;

    scrollIntoView(target, {
      boundary: container,
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, []);

  const updateActiveSlide = useCallback(
    (direction) => {
      setActiveSlide((current) => {
        const newIndex =
          direction === "left"
            ? current - 1 < 0
              ? lastItem
              : current - 1
            : current + 1 > lastItem
              ? 0
              : current + 1;

        window.requestAnimationFrame(() => scrollTo(newIndex));
        return newIndex;
      });
    },
    [lastItem, scrollTo, setActiveSlide],
  );

  useEffect(() => {
    scrollTo(activeSlide);
  }, [activeSlide, scrollTo]);

  useEffect(() => {
    if (data.length <= 1) return undefined;
    const interval = setInterval(() => updateActiveSlide("right"), 6000);
    return () => clearInterval(interval);
  }, [data.length, lastItem, updateActiveSlide]);

  if (!data.length) return null;

  return (
    <div className="relative w-full">
      <div className="mb-4 flex justify-end gap-2">
        <Button className="h-11 w-11 rounded-full p-0" onClick={() => updateActiveSlide("left")}>
          <Icon name="leftArrow" />
        </Button>
        <Button className="h-11 w-11 rounded-full p-0" onClick={() => updateActiveSlide("right")}>
          <Icon name="rightArrow" />
        </Button>
      </div>

      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {data.map(({ id, title, description, imageUrl, techStack, projectLink }, index) => (
          <article
            key={id}
            ref={(el) => (scrollRef.current[index] = el)}
            className={`card-comp flex min-w-[86%] snap-center flex-col overflow-hidden rounded-3xl transition duration-300 sm:min-w-[430px] lg:min-w-[460px] ${
              index === activeSlide ? "scale-[1.01] opacity-100" : "opacity-70"
            }`}
          >
            {imageUrl && (
              <div
                className="aspect-video w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${imageUrl})` }}
                role="img"
                aria-label={title}
              />
            )}

            <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
              <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">{title}</h2>
              <p className="text-sm sm:text-base">{description}</p>

              <div className="flex flex-wrap gap-2">
                {techStack.map((item) => (
                  <TechStackBox key={`${id}-${item}`}>{item}</TechStackBox>
                ))}
              </div>

              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex w-fit items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5 hover:border-[var(--focus)] hover:shadow-md"
              >
                <Icon name="play" />
                See More Details
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-2 flex justify-center gap-2">
        {data.map((item, index) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Go to project ${index + 1}`}
            onClick={() => setActiveSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === activeSlide ? "w-8 bg-[var(--accent)]" : "w-2.5 bg-[var(--border)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
