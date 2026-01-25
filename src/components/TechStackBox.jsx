export default function TechStackBox({ children }) {
  return (
    <>
      <div className="border p-2 rounded-sm hover:bg-deep hover:text-accent cursor-text transition-all">
        {children}
      </div>
    </>
  );
}
