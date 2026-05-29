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
        <div
          className="project-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
          role="img"
          aria-label={`${title} screenshot`}
        />
      )}
      <div className="p-5 sm:p-6">
        <h3 className="text-base font-semibold text-text sm:text-lg">{title}</h3>

        <p className="project-meta">Problem</p>
        <p className="project-body">{problem}</p>

        <p className="project-meta">What I built</p>
        <p className="project-body">{built}</p>

        <p className="project-meta">Tech stack</p>
        <ul className="mt-1 flex flex-wrap gap-1.5">
          {techStack.map((item) => (
            <li key={item}>
              <span className="tag">{item}</span>
            </li>
          ))}
        </ul>

        <p className="project-meta">Proof</p>
        <p className="project-body">
          <a href={proof.href} target="_blank" rel="noopener noreferrer">
            {proof.label} →
          </a>
        </p>

        <p className="project-meta">Why it matters</p>
        <p className="project-body">{recruiterValue}</p>
      </div>
    </article>
  );
}
