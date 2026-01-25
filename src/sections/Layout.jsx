export default function Layout({ className, sectionName, children, id }) {
  return (
    <div id={id.toLowerCase()} className={`font-extrabold  flex flex-col py-11 px-10`}>
      <h1 className="text-3xl mb-5">{sectionName}</h1>
      <div className={`${className}`}> {children}</div>
    </div>
  );
}
