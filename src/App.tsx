import { useEffect } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Project } from "./components/Project";
import { Skill } from "./components/Skill";
import react from "./assets/react.svg";
import nextjs from "./assets/nextjs.svg";
import tailwind from "./assets/tailwind.svg";
import typescript from "./assets/typescript.svg";
import nodejs from "./assets/nodejs.svg";
import mui from "./assets/mui.svg";

function App() {
  useEffect(() => {
    const scrollContainer = document.querySelector("#scroll");

    scrollContainer?.addEventListener("wheel", (event) => {
      event.preventDefault();
      // @ts-ignore
      scrollContainer.scrollLeft += event.deltaY;
    });
  }, []);

  return (
    <div className="fixed flex h-svh w-screen flex-col justify-between bg-gray-dark px-4 py-8 text-white xl:h-screen xl:px-7 xl:pb-5 xl:pt-9 2xl:px-11 2xl:pb-8 2xl:pt-14">
      <Header />

      <div
        id="scroll"
        className="scrollbar-hide sticky mx-[-2.75rem] mt-[-2.25rem] flex h-[21rem] flex-row overflow-scroll whitespace-nowrap px-24 xl:mx-[-1.75rem] 2xl:mx-[-2.75rem] 2xl:h-[25rem] 2xl:px-28"
      >
        {Array.from({ length: 6 }, (_, k) => k).map((index) => {
          return <Project key={index} name={`Project ${index + 1}`} />;
        })}
      </div>

      <div className="scrollbar-hide mb-[-1.75rem] flex max-w-full gap-3 self-center overflow-y-hidden overflow-x-scroll xl:gap-6 xl:overflow-hidden 2xl:gap-9">
        <Skill name="React.JS" src={react} />
        <Skill name="Next.JS" src={nextjs} />
        <Skill name="Tailwind" src={tailwind} />
        <Skill name="Node.JS" src={nodejs} />
        <Skill name="Typescript" src={typescript} />
        <Skill name="MUI" src={mui} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
