import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Instruction from "./components/Instruction";
import Fretboard from "./components/Fretboard";

function App() {
  return (
    <div className="">
      <Header />
      <main>
        <div className="flex">
          <Fretboard />
          <Instruction />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
