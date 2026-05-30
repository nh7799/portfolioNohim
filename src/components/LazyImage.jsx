import { useEffect, useRef, useState } from "react";

/**
 * Defers image requests until near the viewport, shows a shimmer while loading,
 * then fades in smoothly to avoid layout jitter.
 */
export default function LazyImage({
  src,
  alt = "",
  className = "",
  wrapperClassName = "",
  eager = false,
  rootMargin = "240px",
  ...props
}) {
  const wrapRef = useRef(null);
  const imgRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(eager);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (eager || !src || shouldLoad) return;

    const node = wrapRef.current;
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

  useEffect(() => {
    setLoaded(false);
  }, [src]);

  useEffect(() => {
    if (!shouldLoad || !src) return;

    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [shouldLoad, src]);

  const isLoading = shouldLoad && !loaded;

  return (
    <div
      ref={wrapRef}
      className={`lazy-image-wrap ${isLoading ? "lazy-image-wrap--loading" : ""} ${wrapperClassName}`.trim()}
    >
      <span className="lazy-image-shimmer" aria-hidden="true" />
      <img
        ref={imgRef}
        src={shouldLoad ? src : undefined}
        alt={alt}
        className={`lazy-image ${loaded ? "lazy-image--loaded" : ""} ${className}`.trim()}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        {...props}
      />
    </div>
  );
}
