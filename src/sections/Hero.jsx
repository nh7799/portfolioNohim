import BackgroundBox from "../components/BackgroundBox";
import Button from "../components/Button";
import Icon from "../components/Icon";

export default function Hero() {
  return (
    <>
      <div className="hero-comp flex flex-col lg:flex-row h-full">
        <div className="hero-none-graphic flex hero-text order-2 md:order-1 md:flex-3  justify-center p-10 md:p-15 flex-col gap-10">
          {" "}
          <div className="">
            {" "}
            <h1 className="md:text-4xl font-bold text-2xl">
              Hello world, I am Nohim and i really want to make a difference,
              and i am aware that it is always up to me.
              <Icon name={"code"}></Icon>
              <Icon></Icon>
            </h1>
          </div>
          <div className="text-2xl font-light">
            {" "}
            <p className="text-xl md:text-2xl">
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
              backgroundColor="bg-blue-600"
              className="text-white"
              text={"LinkedIn"}
              icon={<Icon name={"linkedIn"}></Icon>}
              isLink={
                "https://www.linkedin.com/in/nohim-hasitha-weedagama-arachchi/"
              }
            ></BackgroundBox>
            <BackgroundBox
              backgroundColor="bg-gray-900"
              className="text-white"
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
        <div className="flex image order-1 md:order-2 md:flex-2 items-center justify-center">
          <div className="rounded-full grayscale contrast-150 profile-image w-50 h-50 lg:w-100 lg:h-100 md:w-70 md:h-70">
            {" "}
          </div>
        </div>
      </div>
    </>
  );
}
