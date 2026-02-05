import BackgroundBox from "../components/BackgroundBox";
import Button from "../components/Button";
import Icon from "../components/Icon";

export default function Hero() {
  return (
    <>
      <div className="hero-comp flex flex-col md:flex-row h-full">
        <div className="hero-none-graphic flex hero-text order-2 md:order-1 md:flex-3  justify-center p-10 md:p-15 flex-col gap-10">
          {" "}
          <div className="">
            {" "}
            <h1 className="md:text-4xl font-bold text-2xl">
              Hello world, I am Nohim and i really want to make a difference.
              <Icon name={"code"}></Icon>
              <Icon></Icon>
            </h1>
          </div>
          <div className="text-2xl font-light">
            {" "}
            <p className="text-xl md:text-2xl">
              hello, i am currently studying at university of hertfordshire, as
              a Level 5 student. i am seeking placement year in 2026. i am
              really passionate about programming, problem solving and designing
              websites. if you are interested in my work just send me a quick
              message and i will definitely get into it right away!!
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
