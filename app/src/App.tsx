import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Fretboard from "./components/Fretboard";

function App() {
  return (
    <div className="absolute inset-0 flex flex-col">
      <Header className="p-5 bg-black text-white" />
      <main className="flex-full bg-gray-200">
        <Fretboard className="p-5 bg-orange-100 border-b border-black" />
        <div className="editorial p-5 text-xl leading-loose font-serif text-gray-800">
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta et
            reiciendis exercitationem tempore. Debitis minus, dolorem
            exercitationem officiis optio totam ex adipisci, perspiciatis sed
            placeat repudiandae quaerat est quae modi! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Dicta et reiciendis
            exercitationem tempore. Debitis minus, dolorem exercitationem
            officiis optio totam ex adipisci, perspiciatis sed placeat
            repudiandae quaerat est quae modi!
          </p>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta et
            reiciendis exercitationem tempore. Debitis minus, dolorem
            exercitationem officiis optio totam ex adipisci, perspiciatis sed
            placeat repudiandae quaerat est quae modi!
          </p>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta et
            reiciendis exercitationem tempore. Debitis minus, dolorem
            exercitationem officiis optio totam ex adipisci, perspiciatis sed
            placeat repudiandae quaerat est quae modi!
          </p>
        </div>
      </main>
      <Footer className="p-5 bg-black text-white" />
    </div>
  );
}

export default App;
