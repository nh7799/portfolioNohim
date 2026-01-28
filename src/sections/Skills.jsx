import Layout from "./Layout";
import { skills } from "../data/skills";
import BackgroundBox from "../components/BackgroundBox";
import Game from "../components/Game";

export default function Skills() {
  return (
    <>
      <Layout id={"Skills"} sectionName={"Skills"}>
        <div className=" p-5 flex gap-5 flex-wrap">
          {skills.map((item) => (
            <BackgroundBox
              text={item}
              className="text-nowrap skills-box text-deep"
            ></BackgroundBox>
          ))}
        </div>
        <div>
          <Game></Game>
        </div>
      </Layout>
    </>
  );
}
