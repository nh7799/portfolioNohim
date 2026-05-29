function getHeaderOffset() {
  const header = document.querySelector(".site-header");
  return (header?.offsetHeight ?? 56) + 8;
}

function getScrollRoot() {
  return document.scrollingElement ?? document.documentElement;
}

export function scrollToSection(sectionId, { behavior = "smooth" } = {}) {
  const id = String(sectionId).replace(/^#/, "");
  const el = document.getElementById(id);
  if (!el) return false;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const scrollBehavior = reduced ? "auto" : behavior;
  const root = getScrollRoot();
  const targetTop =
    el.getBoundingClientRect().top + root.scrollTop - getHeaderOffset();

  root.scrollTo({
    top: Math.max(0, targetTop),
    behavior: scrollBehavior,
  });

  // Fine-tune after layout (fixed header / iOS scroll root quirks)
  requestAnimationFrame(() => {
    const offset = el.getBoundingClientRect().top - getHeaderOffset();
    if (Math.abs(offset) > 4) {
      root.scrollBy({ top: offset, behavior: scrollBehavior });
    }
  });

  try {
    history.replaceState(null, "", `#${id}`);
  } catch {
    window.location.hash = id;
  }

  return true;
}

export function scrollToSectionAfterUnlock(sectionId, afterClose) {
  afterClose?.();
  window.setTimeout(() => scrollToSection(sectionId), 50);
}
