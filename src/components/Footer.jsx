import BackgroundBox from "./BackgroundBox";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-wrap gap-3">
          <BackgroundBox
            backgroundColor="bg-blue-600"
            className="border-blue-500 text-white"
            text="LinkedIn"
            icon={<Icon name="linkedIn" />}
            isLink="https://www.linkedin.com/in/nohim-hasitha-weedagama-arachchi/"
          />
          <BackgroundBox
            backgroundColor="bg-slate-950"
            className="border-slate-800 text-white"
            text="GitHub"
            icon={<Icon name="github" />}
            isLink="https://github.com/nh7799"
          />
          <BackgroundBox text="100% Accessibility Compliant" />
        </div>

        <div className="max-w-xl text-left sm:text-right">
          <p className="text-base font-bold text-[var(--text)]">&copy; All rights reserved.</p>
          <p className="mt-2 text-sm">
            All the data shown in here are valid as of 2026; however, it is not guaranteed to be 100% accurate. Minor discrepancies may exist, therefore contacting me can clarify further doubt.
          </p>
        </div>
      </div>
    </footer>
  );
}
