export default function Layout({ className = "", sectionName, children, id, style }) {
  return (
    <section
      style={style}
      id={id?.toLowerCase()}
      className="scroll-mt-28 py-14 sm:py-18 lg:py-22"
    >
      <div className="mb-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-[var(--border)]" />
        <h1 className="text-center text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
          {sectionName}
        </h1>
        <div className="h-px flex-1 bg-[var(--border)]" />
      </div>
      <div className={className}>{children}</div>
    </section>
  );
}
