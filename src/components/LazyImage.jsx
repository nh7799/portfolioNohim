import { useEffect, useRef, useState } from "react";

/**
 * Defers image requests until near the viewport (IO + native loading="lazy").
 * Use `eager` for above-the-fold images (e.g. hero portrait).
 */
export default function LazyImage({
  src,
  alt = "",
  className = "",
  eager = false,
  rootMargin = "240px",
  ...props
}) {
  const ref = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(eager);

  useEffect(() => {
    if (eager || !src || shouldLoad) return;

    const node = ref.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [eager, rootMargin, shouldLoad, src]);

  return (
    <img
      ref={ref}
      src={shouldLoad ? src : undefined}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : "auto"}
      {...props}
    />
  );
}
