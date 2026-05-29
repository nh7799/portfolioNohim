import BackgroundBox from "../components/BackgroundBox";
import Icon from "../components/Icon";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-comp grid items-center gap-8 py-10 sm:py-14 md:grid-cols-[1.2fr_0.8fr] md:gap-10 md:py-20 lg:py-24"
    >
      {/* Profile image: top on mobile, right column on md+ */}
      <div className="order-1 flex justify-center md:order-2 md:justify-end">
        <div className="profile-image h-44 w-44 rounded-[2rem] grayscale contrast-125 shadow-2xl sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96" />
      </div>

      {/* Text content: below image on mobile, left column on md+ */}
      <div className="order-2 flex flex-col gap-4 sm:gap-6 md:order-1 md:gap-7">
        {/* Badge — allow wrapping on tiny screens */}
        <div className="inline-flex w-fit flex-wrap items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-bold text-[var(--accent)] shadow-sm sm:text-sm">
          <Icon name="code" />
          <span>Software Engineering Placement Candidate</span>
        </div>

        <h1 className="text-balance text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Hello world, I am Nohim and I really want to make a difference, and I am aware that it is always up to me.
        </h1>

        <p className="text-sm leading-relaxed sm:text-base md:text-lg lg:text-xl">
          I am a Level 5 Computer Science student at the University of Hertfordshire, seeking a 2026 placement year opportunity in software engineering, technology, or related roles. I enjoy solving problems, building practical software projects, and creating reliable, user-focused applications.{" "}
          <strong className="font-extrabold text-[var(--text)]">I have full right to work in the UK for a placement year.</strong>{" "}
          If my skills or projects are relevant to your team, I would be happy to connect and discuss potential opportunities.
        </p>

        <div className="flex flex-wrap gap-2">
          <BackgroundBox text="Python" />
          <BackgroundBox text="Java" />
          <BackgroundBox text="JavaScript" />
          <BackgroundBox text="React" />
          <BackgroundBox text="React Native" />
        </div>

        <div className="flex flex-wrap gap-2">
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
