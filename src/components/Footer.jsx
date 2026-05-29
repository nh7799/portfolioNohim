import BackgroundBox from "./BackgroundBox";
import Icon from "./Icon";

export default function Footer() {
  return (
    <>
      <div className="footer mt-8 flex flex-col gap-6 p-4 text-text-secondary sm:p-6 md:p-8">
        <div>
          <div className="flex flex-wrap gap-2">
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
        </div>
        
       

        <div>
          <BackgroundBox text="100% Accessibility Compliant">

          </BackgroundBox>
          <p className="text-xl"> &copy; All rights Reserved.<br></br>
          <p className="text-sm">
            All the data shown in here are valid as of 2026,
            however, it is not guaranteed to be 100% accurate, minor discrepancies may exist,
            therefore contacting me can clarify further doubt.
          </p>
          </p>
        </div>
      </div>
    </>
  );
}
