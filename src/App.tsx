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
    <div className="w-full flex h-[100vh] bg-gray-dark px-11 pb-8 py-14 flex-col text-white justify-between">
      <Header />

      <div
        id="scroll"
        className="overflow-hidden sticky px-28 mx-[-2.5rem] h-[25rem] whitespace-nowrap flex flex-row mt-[-2.25rem] "
      >
        {Array.from({ length: 10 }, (_, k) => k).map((index) => {
          return <Project key={index} name={index} />;
        })}
      </div>

      <div className="flex flex-row self-center gap-9 mb-[-1.75rem]">
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
