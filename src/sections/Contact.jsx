import Button from "../components/Button";
import Layout from "./Layout";

export default function Contact() {
  return (
    <Layout sectionName="Contact Me" id="contact">
      <div className="flex justify-center">
        <form
          action="https://formspree.io/f/mredjrrp"
          method="POST"
          className="card-comp flex w-full max-w-2xl flex-col gap-6 rounded-3xl p-5 sm:p-8"
        >
          <div>
            <label htmlFor="first" className="text-sm font-extrabold uppercase tracking-wide text-[var(--muted)]">
              Firstname
            </label>
            <input
              className="mt-3 block w-full rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 font-medium text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--focus)] focus:ring-4 focus:ring-[var(--ring)]"
              type="text"
              name="first"
              placeholder="John"
              id="first"
              required
            />
          </div>

          <div>
            <label htmlFor="last" className="text-sm font-extrabold uppercase tracking-wide text-[var(--muted)]">
              Lastname
            </label>
            <input
              className="mt-3 block w-full rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 font-medium text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--focus)] focus:ring-4 focus:ring-[var(--ring)]"
              type="text"
              name="last"
              placeholder="Doe"
              id="last"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-extrabold uppercase tracking-wide text-[var(--muted)]">
              Email
            </label>
            <input
              className="mt-3 block w-full rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 font-medium text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--focus)] focus:ring-4 focus:ring-[var(--ring)]"
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@email.com"
              required
            />
          </div>

          <Button
            type="submit"
            className="border-0 bg-blue-700 text-white hover:bg-blue-500"
            onClick={(event) => {
              const button = event.currentTarget;
              button.textContent = "Please wait...";

              setTimeout(() => {
                button.textContent = "Contact me";
              }, 3000);
            }}
          >
            Contact me
          </Button>
        </form>
      </div>
    </Layout>
  );
}
