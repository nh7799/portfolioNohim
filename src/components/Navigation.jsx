import { useEffect, useState } from "react";
import Button from "./Button";
import Icon from "./Icon";
import NavComp from "./NavComp";

export default function Navigation() {
  const [lightMode, setLightMode] = useState(false);
  useEffect(
    () =>
      lightMode
        ? document.documentElement.classList.remove("dark")
        : document.documentElement.classList.add("dark"),
    [lightMode],
  );
  return (
    <>
      <div className="flex border-b border-b-border flex-col items-center w-full my-4 font-bold min-[950px]:flex-row  p-3">
        <div className="flex  items-center justify-center md:flex-1">
          <h1
            aria-describedby="Logo"
            className="font-extrabold text-2xl text-center"
          >
            Nohim.h
            <sup>
              {" "}
              <p className="inline text-lime-400 text-sm">ver 1.0</p>
            </sup>
            <br></br>
            <p className="text-lg">
              <Button
                className="border-0 m-0 p-0 shadow-none"
                onClick={() => setLightMode(true)}
              >
                <span className={`${lightMode ? "text-2xl" : null}`}>
                  LightMode
                </span>
              </Button>{" "}
              <span className="mx-2">|</span>
              <Button
                className="border-0 m-0 p-0 shadow-none"
                onClick={() => setLightMode(false)}
              >
                <span className={`${!lightMode ? "text-2xl" : null}`}>
                  DarkMode
                </span>
              </Button>
            </p>
          </h1>
        </div>
        <div className="nav flex text-nowrap flex-row justify-center gap-10 text-sm md:text-lg md:flex-2 py-4">
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
            onClick={() => document.documentElement.classList.add("dark")}
          ></NavComp>
        </div>
      </div>
    </>
  );
}
