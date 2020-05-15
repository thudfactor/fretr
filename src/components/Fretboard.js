import React, { useState } from "react";
import { midiToNote } from "../utils/notation";
import Instrument, { getInstrument } from "../controls/Instruments";
import useToggle from "../controls/useToggle";

export default function Fretboard({ className = "" }) {
  const defaultInstrument = getInstrument("ukulele");
  const [instrument, setInstrument] = useState(defaultInstrument.slug);
  const [frets, setFrets] = useState(defaultInstrument.frets);
  const [tuning, setTuning] = useState(defaultInstrument.tunings[0].strings); // standard GCEA re-entrant tuning for the ukulele
  const [isTabLayout, LayoutToggle] = useToggle("High String on Top", true);

  const note = (instString, fret) => {
    const fretWire = fret === 0 ? "border-r-4" : "border-r";
    const { note, octave } = midiToNote(tuning[instString] + fret);
    return (
      <div
        key={`${instString}-${fret}`}
        className={`relative relative text-center ${fretWire} p-2 octave-${octave} border-gray-600`}
      >
        <div className="absolute string inset-x-0 top-1/2 h-px bg-black opacity-25"></div>
        <div className={`noteName relative text-xs note-${note}`}>{note}</div>
      </div>
    );
  };

  const notes = [];

  for (let fret = 0; fret <= frets; fret++) {
    // interestingly, fretted instruments count from 0 as well
    if (isTabLayout) {
      for (let string = tuning.length - 1; string >= 0; string--) {
        notes.push(note(string, fret));
      }
    } else {
      for (let string = 0; string <= tuning.length; string++) {
        notes.push(note(string, fret));
      }
    }
  }

  /*
  const tuner = (current, instString) => {
    return (
      <div className="p-2" key={`${tuner} - ${instString}`}>
        <button
          class="mr-2"
          onClick={(e) => changeTuning(instString, current - 1)}
        >
          ⤺
        </button>
        <button onClick={(e) => changeTuning(instString, current + 1)}>
          ⤻
        </button>
      </div>
    );
  };

  const changeTuning = (string, newNote) => {
    const newTuning = [...tuning];
    newTuning[string] = parseInt(newNote);
    setTuning(newTuning);
  };
  */

  const handleChange = ({ slug, name, tuning, frets }) => {
    setInstrument(slug);
    setFrets(frets);
    setTuning(tuning);
  };

  return (
    <div className={className}>
      <div class="options mb-5 flex">
        <Instrument
          className="mr-2"
          instrument={instrument}
          handleChange={handleChange}
        />
        <LayoutToggle />
      </div>
      <div
        className={`grid grid-flow-col gap-0 grid-rows-${tuning.length} bx-2`}
      >
        {notes}
      </div>
      <div className={`grid grid-flow-col gap-0 grid-rows-1 bx-2`}></div>
    </div>
  );
}
