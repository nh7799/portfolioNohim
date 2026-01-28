import BackgroundBox from "./BackgroundBox";
import Icon from "./Icon";

export default function Footer() {
  return (
    <>
      <div className="footer p-8">
        <div>
          <div className="flex gap-2">
            <BackgroundBox
              backgroundColor="bg-blue-600"
              text={"LinkedIn"}
              icon={<Icon name={"linkedIn"}></Icon>}
              isLink={
                "https://www.linkedin.com/in/nohim-hasitha-weedagama-arachchi/"
              }
            ></BackgroundBox>
            <BackgroundBox
              backgroundColor="bg-gray-900"
              text={"GitHub"}
              icon={<Icon name={"github"}></Icon>}
              isLink={
                "https://www.linkedin.com/in/nohim-hasitha-weedagama-arachchi/"
              }
            ></BackgroundBox>
          </div>
        </div>
        <div>
          <p className="text-xl"> &copy; All rights Reserved.</p>
        </div>
      </div>
    </>
  );
}
