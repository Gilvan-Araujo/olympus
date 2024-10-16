import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="w-full flex h-[100vh] bg-gray-dark px-11 pb-8 py-14 flex-col text-white justify-between">
      <Header />

      <Footer />
    </div>
  );
}

export default App;
