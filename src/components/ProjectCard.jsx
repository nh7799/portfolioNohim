export default function ProjectCard({
  title,
  problem,
  built,
  techStack,
  proof,
  recruiterValue,
  imageUrl,
}) {
  return (
    <article className="project-card">
      {imageUrl && (
        <div className="project-card-media studio-photo">
          <img
            src={imageUrl}
            alt=""
            className="project-thumb"
            loading="lazy"
            decoding="async"
          />
        </div>
      )}

      <div className="project-card-main">
        <header className="project-card-head">
          <h3>{title}</h3>
        </header>

        <div className="project-card-body">
          <div className="project-field">
            <p className="project-meta">Problem</p>
            <p className="project-body">{problem}</p>
          </div>

          <div className="project-field">
            <p className="project-meta">What I built</p>
            <p className="project-body">{built}</p>
          </div>

          <div className="project-field">
            <p className="project-meta">Tech stack</p>
            <ul className="project-tags">
              {techStack.map((item) => (
                <li key={item}>
                  <span className="tag">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="project-field project-field-split">
            <div className="project-split-item">
              <p className="project-meta">Proof</p>
              <p className="project-body">
                <a href={proof.href} target="_blank" rel="noopener noreferrer">
                  {proof.label} →
                </a>
              </p>
            </div>
            <div className="project-split-item">
              <p className="project-meta">Why it matters</p>
              <p className="project-body">{recruiterValue}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
