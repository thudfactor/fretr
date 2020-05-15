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
        <Fretboard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
