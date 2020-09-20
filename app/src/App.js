import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Fretboard from "./components/Fretboard";
import Instruction from "./components/Instruction";

function App() {
  return (
    <div className="absolute inset-0 flex flex-col">
      <Header className="p-5 bg-black text-white" />
      <main className="flex-full bg-gray-200">
        <Fretboard className="p-5 bg-orange-100 border-b border-black" />
        <Instruction />
      </main>
      <Footer className="p-5 bg-black text-white" />
    </div>
  );
}

export default App;
