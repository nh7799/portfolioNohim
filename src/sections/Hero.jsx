import BackgroundBox from "../components/BackgroundBox";
import Button from "../components/Button";
import Icon from "../components/Icon";

export default function Hero() {
  return (
    <>
      <div id="home" className="hero-comp flex h-full flex-col lg:flex-row">
        <div className="hero-none-graphic hero-text order-2 flex flex-col justify-center gap-6 p-4 sm:gap-8 sm:p-6 md:order-1 md:flex-3 md:gap-10 md:p-10 lg:order-1">
          {" "}
          <div className="">
            {" "}
            <h1 className="font-display text-xl font-semibold leading-snug text-text sm:text-2xl md:text-3xl lg:text-4xl">
              Hello world, I am{" "}
              <span className="brand-mark">Nohim</span> and i really want to make a difference,
              and i am aware that it is always up to me.
              <Icon name={"code"}></Icon>
              <Icon></Icon>
            </h1>
          </div>
          <div className="font-light">
            {" "}
            <p className="text-base leading-relaxed sm:text-lg md:text-xl lg:text-2xl">
              I am a Level 5 Computer Science student at the University of
              Hertfordshire, seeking a 2026 placement year opportunity in
              software engineering, technology, or related roles. I enjoy
              solving problems, building practical software projects, and
              creating reliable, user-focused applications. **I have full right
              to work in the UK for a placement year.** If my skills or projects
              are relevant to your team, I would be happy to connect and discuss
              potential opportunities.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <BackgroundBox text="Python" />
            <BackgroundBox text="Java" />
            <BackgroundBox text="Javascript" />
            <BackgroundBox text="React" />
            <BackgroundBox text="React Native" />
          </div>
          <div className="flex gap-2">
            <BackgroundBox
              variant="accent"
              text={"LinkedIn"}
              icon={<Icon name={"linkedIn"}></Icon>}
              isLink={
                "https://www.linkedin.com/in/nohim-hasitha-weedagama-arachchi/"
              }
            ></BackgroundBox>
            <BackgroundBox
              variant="surface"
              text={"GitHub"}
              icon={<Icon name={"github"}></Icon>}
              isLink={
                "https://www.linkedin.com/in/nohim-hasitha-weedagama-arachchi/"
              }
            ></BackgroundBox>
          </div>
          <div>
            {/* <Button className="">
              <Icon name={"at"} className="mx-1"></Icon>
              Contact Me
            </Button> */}
          </div>
        </div>
        <div className="image order-1 flex items-center justify-center md:order-2 md:flex-2 lg:order-2">
          <div className="profile-image h-40 w-40 rounded-full contrast-150 grayscale sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-72 lg:w-72 xl:h-80 xl:w-80">
            {" "}
          </div>
        </div>
      </div>
    </>
  );
}
