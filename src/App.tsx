import { useEffect } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Project } from "./components/Project";

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
        className="overflow-hidden sticky px-28 mx-[-2.5rem] h-[25rem] whitespace-nowrap flex flex-row "
      >
        {Array.from({ length: 10 }, (_, k) => k).map((index) => {
          return <Project key={index} name={index} />;
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
