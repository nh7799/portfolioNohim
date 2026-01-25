import Carousal from "../components/Carousal";
import Layout from "./Layout";
import { projectCards } from "../data/projects";

export default function Projects() {
  return (
    <Layout id={"Projects"} sectionName={"Projects"}>
      <div className="flex justify-center lg:justify-center">
        <Carousal data={projectCards}></Carousal>
      </div>
    </Layout>
  );
}
