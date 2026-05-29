export default function Section({ id, label, title, intro, children }) {
  return (
    <section id={id} className="section">
      {label && <p className="section-label">{label}</p>}
      <h2 className="section-headline mt-2">{title}</h2>
      {intro && <p className="text-lead prose-width mt-3">{intro}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}
