import Button from "../components/Button";
import Layout from "./Layout";

export default function Contact() {
  return (
    <Layout sectionName="Contact Me" id="contact">
      <div className="flex justify-center">
        <form
          action="https://formspree.io/f/mredjrrp"
          method="POST"
          className="card-comp flex w-full max-w-xl flex-col gap-5 rounded-3xl p-5 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="first" className="block text-xs font-extrabold uppercase tracking-wide text-[var(--muted)] sm:text-sm">
                Firstname
              </label>
              <input
                className="mt-2 block w-full rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm font-medium text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--focus)] focus:ring-4 focus:ring-[var(--ring)]"
                type="text" name="first" placeholder="John" id="first" required autoComplete="given-name"
              />
            </div>
            <div>
              <label htmlFor="last" className="block text-xs font-extrabold uppercase tracking-wide text-[var(--muted)] sm:text-sm">
                Lastname
              </label>
              <input
                className="mt-2 block w-full rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm font-medium text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--focus)] focus:ring-4 focus:ring-[var(--ring)]"
                type="text" name="last" placeholder="Doe" id="last" autoComplete="family-name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-extrabold uppercase tracking-wide text-[var(--muted)] sm:text-sm">
              Email
            </label>
            <input
              className="mt-2 block w-full rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm font-medium text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--focus)] focus:ring-4 focus:ring-[var(--ring)]"
              type="email" name="email" id="email" placeholder="johndoe@email.com" required autoComplete="email"
            />
          </div>

          <Button
            type="submit"
            className="w-full border-0 bg-blue-700 py-3 text-white hover:bg-blue-500"
            onClick={(event) => {
              const button = event.currentTarget;
              button.textContent = "Please wait...";
              setTimeout(() => { button.textContent = "Contact me"; }, 3000);
            }}
          >
            Contact me
          </Button>
        </form>
      </div>
    </Layout>
  );
}
