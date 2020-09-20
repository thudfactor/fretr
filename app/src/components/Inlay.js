import React from "react";

export default function Inlay({ fret, numStrings }) {
  return (
    <div
      key={`inlay-${fret}`}
      className={`relative row-start-1 col-start-${fret + 1} col-end-${
        fret + 2
      } row-end-${numStrings + 1}`}
    >
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 -rotate-90 top-1/2 left-1/2 text-4xl leading-none">
        {fret === 12 ? "••" : "•"}
      </div>
    </div>
  );
}
