import { useEffect, useState } from "react";

const SECTION_IDS = [
  "home",
  "snapshot",
  "projects",
  "skills",
  "academic",
  "about",
  "contact",
];

export default function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const elements = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -60% 0px", threshold: [0, 0.2, 0.4] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}
