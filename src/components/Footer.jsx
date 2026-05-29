import BackgroundBox from "./BackgroundBox";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="flex flex-wrap gap-2 sm:gap-3">
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
        <div className="max-w-sm text-left sm:max-w-xs sm:text-right md:max-w-sm">
          <p className="text-sm font-bold text-[var(--text)] sm:text-base">&copy; All rights reserved.</p>
          <p className="mt-1.5 text-xs leading-relaxed sm:mt-2">
            All the data shown in here are valid as of 2026; however, it is not guaranteed to be 100% accurate. Minor discrepancies may exist, therefore contacting me can clarify further doubt.
          </p>
        </div>
      </div>
    </footer>
  );
}
