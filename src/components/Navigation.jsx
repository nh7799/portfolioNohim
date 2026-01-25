import Icon from "./Icon";
import NavComp from "./NavComp";

export default function Navigation() {
  return (
    <>
      <div className="flex flex-col items-center w-full overflow-y-hidden font-bold md:flex-row  p-3">
        <div className="flex items-center justify-center md:flex-1">
          <h1 aria-describedby="Logo" className="font-extrabold text-2xl">
            Nohim h
          </h1>
        </div>
        <div className="nav flex flex-row justify-center gap-10 text-sm md:text-lg md:flex-3 py-4">
          {" "}
          <NavComp
            text={"Home"}
            id="#home"
            icon={<Icon name={"home"}></Icon>}
          ></NavComp>
          <NavComp
            text={"About"}
            id="#about"
            icon={<Icon name={"user"}></Icon>}
          ></NavComp>
          <NavComp
            text={"Projects"}
            id="#projects"
            icon={<Icon name={"book"}></Icon>}
          ></NavComp>
          <NavComp
            text={"Skills"}
            id="#skills"
            icon={<Icon name={"rocket"}></Icon>}
          ></NavComp>
          <NavComp
            text={"Contact Me"}
            id="#contact"
            icon={<Icon name={"at"}></Icon>}
          ></NavComp>
        </div>
      </div>
    </>
  );
}
