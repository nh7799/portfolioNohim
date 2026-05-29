export default function Section({ id, label, title, intro, children }) {
  return (
    <section id={id} className="section">
      <header className="section-intro-block">
        {label && <p className="section-label">{label}</p>}
        <h2 className="section-headline mt-2">{title}</h2>
        {intro && <p className="text-lead mt-3">{intro}</p>}
      </header>
      <div className="section-body">{children}</div>
    </section>
  );
}
