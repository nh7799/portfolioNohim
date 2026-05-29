import BackgroundBox from "../components/BackgroundBox";
import Icon from "../components/Icon";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-comp grid items-center gap-8 py-12 sm:gap-10 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-24"
    >
      {/* Profile image — shows first on mobile, second on desktop */}
      <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
        <div className="profile-image h-48 w-48 rounded-[2rem] grayscale contrast-125 shadow-2xl xs:h-56 xs:w-56 sm:h-72 sm:w-72 lg:h-96 lg:w-96" />
      </div>

      {/* Text content */}
      <div className="order-2 flex flex-col gap-5 lg:order-1 lg:gap-7">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-bold text-[var(--accent)] shadow-sm sm:text-sm">
          <Icon name="code" />
          Software Engineering Placement Candidate
        </div>

        <div>
          <h1 className="text-balance text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Hello world, I am Nohim and I really want to make a difference, and I am aware that it is always up to me.
          </h1>
        </div>

        <p className="max-w-3xl text-base sm:text-lg lg:text-xl">
          I am a Level 5 Computer Science student at the University of Hertfordshire, seeking a 2026 placement year opportunity in software engineering, technology, or related roles. I enjoy solving problems, building practical software projects, and creating reliable, user-focused applications.{" "}
          <strong className="font-extrabold text-[var(--text)]">I have full right to work in the UK for a placement year.</strong>{" "}
          If my skills or projects are relevant to your team, I would be happy to connect and discuss potential opportunities.
        </p>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          <BackgroundBox text="Python" />
          <BackgroundBox text="Java" />
          <BackgroundBox text="JavaScript" />
          <BackgroundBox text="React" />
          <BackgroundBox text="React Native" />
        </div>

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
        </div>
      </div>
    </section>
  );
}
