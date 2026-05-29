export default function Layout({ className, sectionName, children, id, style }) {
  return (
    <div
      style={style}
      id={id.toLowerCase()}
      className="flex flex-col py-8 font-extrabold sm:py-11 md:px-4 lg:px-6"
    >
      <h1 className="section-heading mb-8 text-center text-2xl sm:text-3xl md:text-4xl">
        {sectionName}
      </h1>
      <div className={`${className}`}> {children}</div>
    </div>
  );
}
