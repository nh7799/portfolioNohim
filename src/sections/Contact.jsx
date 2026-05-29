import Button from "../components/Button";
import Section from "../components/Section";

export default function Contact() {
  return (
    <Section
      id="contact"
      label="Contact"
      title="Get in touch"
      intro="For placement and internship enquiries. I reply within a few working days."
    >
      <form
        action="https://formspree.io/f/mredjrrp"
        method="POST"
        className="panel prose-width p-5 sm:p-6"
      >
        <div className="space-y-5">
          <fieldset>
            <label htmlFor="first" className="text-sm font-medium text-text">
              First name
            </label>
            <input
              id="first"
              name="first"
              type="text"
              required
              autoComplete="given-name"
              className="input-field mt-1"
              placeholder="Jane"
            />
          </fieldset>

          <fieldset>
            <label htmlFor="last" className="text-sm font-medium text-text">
              Last name
            </label>
            <input
              id="last"
              name="last"
              type="text"
              autoComplete="family-name"
              className="input-field mt-1"
              placeholder="Smith"
            />
          </fieldset>

          <fieldset>
            <label htmlFor="email" className="text-sm font-medium text-text">
              Work email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="input-field mt-1"
              placeholder="jane@company.com"
            />
          </fieldset>

          <Button type="submit" className="btn btn-primary w-full border-0">
            Send message
          </Button>
        </div>
      </form>
    </Section>
  );
}
