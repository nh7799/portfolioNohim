import BackgroundBox from "../components/BackgroundBox";
import Icon from "../components/Icon";

export default function Hero() {
  return (
    <section id="home" className="hero-comp grid items-center gap-10 py-14 sm:py-18 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
      <div className="order-2 flex flex-col gap-7 lg:order-1">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-bold text-[var(--accent)] shadow-sm">
          <Icon name="code" />
          Software Engineering Placement Candidate
        </div>

        <div className="max-w-4xl">
          <h1 className="text-balance text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hello world, I am Nohim and I really want to make a difference, and I am aware that it is always up to me.
          </h1>
        </div>

        <p className="max-w-3xl text-base sm:text-lg lg:text-xl">
          I am a Level 5 Computer Science student at the University of Hertfordshire, seeking a 2026 placement year opportunity in software engineering, technology, or related roles. I enjoy solving problems, building practical software projects, and creating reliable, user-focused applications. <strong className="font-extrabold text-[var(--text)]">I have full right to work in the UK for a placement year.</strong> If my skills or projects are relevant to your team, I would be happy to connect and discuss potential opportunities.
        </p>

        <div className="flex flex-wrap gap-3">
          <BackgroundBox text="Python" />
          <BackgroundBox text="Java" />
          <BackgroundBox text="JavaScript" />
          <BackgroundBox text="React" />
          <BackgroundBox text="React Native" />
        </div>

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
        </div>
      </div>

      <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
        <div className="profile-image h-56 w-56 rounded-[2.5rem] grayscale contrast-125 shadow-2xl sm:h-72 sm:w-72 lg:h-96 lg:w-96" />
      </div>
    </section>
  );
}
