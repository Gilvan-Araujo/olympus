import { useEffect } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Project } from "./components/Project";
import { Skill } from "./components/Skill";
import react from "./assets/react.svg";
import next from "./assets/next-js.svg";

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
    <div className="flex h-[100vh] w-full flex-col justify-between bg-gray-dark px-7 pb-5 pt-9 text-white 2xl:px-11 2xl:pb-8 2xl:pt-14">
      <Header />

      <div
        id="scroll"
        className="scrollbar-hide sticky mx-[-1.75rem] mt-[-2.25rem] flex h-[21rem] flex-row overflow-scroll whitespace-nowrap px-24 2xl:mx-[-2.75rem] 2xl:h-[25rem] 2xl:px-28"
      >
        {Array.from({ length: 10 }, (_, k) => k).map((index) => {
          return <Project key={index} name={index} />;
        })}
      </div>

      <div className="mb-[-1.75rem] flex flex-row gap-6 self-center 2xl:gap-9">
        <Skill name="React.JS" src={react} />
        <Skill name="Next.JS" src={next} />
        <Skill name="React.JS" src={react} />
        <Skill name="Next.JS" src={next} />
        <Skill name="React.JS" src={react} />
        <Skill name="Next.JS" src={next} />
        <Skill name="React.JS" src={react} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
