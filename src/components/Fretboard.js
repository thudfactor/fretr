import React from "react";
import { midiToNote } from "../utils/notation";

export default function Fretboard() {
  const tuning = [67, 60, 64, 69]; // standard GCEA re-entrant tuning for the ukulele

  const frets = 18;

  const note = (instString, fret) => {
    const fretWire = fret === 0 ? "border-b-4" : "border-b";
    return (
      <div
        key={`${instString}-${fret}`}
        className={`text-center ${fretWire} p-2 border-gray-600`}
      >
        {midiToNote(tuning[instString] + fret)}
      </div>
    );
  };

  const notes = [];
  for (let fret = 0; fret <= frets; fret++) {
    // interestingly, fretted instruments count from 0 as well
    for (let string = 0; string < tuning.length; string++) {
      notes.push(note(string, fret));
    }
  }

  return (
    <div className="grid grid-flow-row grid-cols-4 bx-2 m-5 text-sm">
      {notes}
    </div>
  );
}
