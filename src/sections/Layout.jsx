export default function Layout({ className = "", sectionName, children, id, style }) {
  return (
    <section
      style={style}
      id={id?.toLowerCase()}
      className="scroll-mt-24 py-12 sm:py-16 lg:py-20"
    >
      <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4">
        <div className="h-px flex-1 bg-[var(--border)]" />
        <h2 className="whitespace-nowrap text-center text-xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
          {sectionName}
        </h2>
        <div className="h-px flex-1 bg-[var(--border)]" />
      </div>
      <div className={className}>{children}</div>
    </section>
  );
}
