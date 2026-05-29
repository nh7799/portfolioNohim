import Section from "../components/Section";
import { recruiterSnapshot } from "../data/snapshot";

export default function RecruiterSnapshot() {
  return (
    <Section
      id="snapshot"
      label="At a glance"
      title="Recruiter snapshot"
      intro="Key facts for a first screen — no fluff."
    >
      <div className="panel px-5 sm:px-6">
        <dl>
          {recruiterSnapshot.map(({ label, value }) => (
            <div key={label} className="snapshot-row">
              <dt className="snapshot-label">{label}</dt>
              <dd className="snapshot-value">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
