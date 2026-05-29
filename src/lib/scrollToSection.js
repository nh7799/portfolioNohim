function getHeaderOffset() {
  const header = document.querySelector(".site-header");
  return (header?.offsetHeight ?? 56) + 8;
}

export function scrollToSection(sectionId, { behavior = "smooth" } = {}) {
  const id = String(sectionId).replace(/^#/, "");
  const el = document.getElementById(id);
  if (!el) return false;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top =
    el.getBoundingClientRect().top + window.scrollY - getHeaderOffset();

  window.scrollTo({
    top: Math.max(0, top),
    behavior: reduced ? "auto" : behavior,
  });

  history.replaceState?.(null, "", `#${id}`);
  return true;
}

export function scrollToSectionAfterUnlock(sectionId, afterClose) {
  afterClose?.();
  window.setTimeout(() => scrollToSection(sectionId), 50);
}
