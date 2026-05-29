export default function TechStackBox({ children }) {
  return (
    <div className="cursor-text rounded-md border border-border bg-gold-muted px-2.5 py-1.5 text-xs font-medium tracking-wide text-gold transition-all hover:border-gold">
      {children}
    </div>
  );
}
