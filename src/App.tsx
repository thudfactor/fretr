import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Header />
      <main>
        <div className="flex">
          <div className="flex-auto">fretboard goes here</div>
          <div className="flex-auto">Informations go here</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
