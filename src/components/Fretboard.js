import React, { useState } from "react";
import { midiToNote } from "../utils/notation";
import Instrument, { getInstrument } from "../controls/Instruments";
import useToggle from "../controls/useToggle";
import { findScale, makeScale } from "../utils/scales";
import ScaleSelector from "../controls/ScaleSelector";

export default function Fretboard({ className = "" }) {
  const defaultInstrument = getInstrument("ukulele");
  const [instrument, setInstrument] = useState(defaultInstrument.slug);
  const [frets, setFrets] = useState(defaultInstrument.frets);
  const [tuning, setTuning] = useState(defaultInstrument.tunings[0].strings); // standard GCEA re-entrant tuning for the ukulele

  const [isTabLayout, LayoutToggle] = useToggle("High String on Top", true);
  const [flats, setFlats] = useState(false);

  const [scale, setScale] = useState("major-blues");
  const [root, setRoot] = useState("E");

  const scaleNotes = makeScale(root, scale);

  const note = (instString, fret) => {
    const fretWire = fret === 0 ? "border-r-4" : "border-r";
    const { name, octave } = midiToNote(tuning[instString] + fret, { flats });

    const { highlight } = findScale(scale);

    const highlightColor = ((pos) => {
      if (pos === 0) {
        return "bg-green-800 text-white";
      } else if (highlight.indexOf(pos) >= 0) {
        return "bg-blue-700 text-white";
      } else if (pos > 0) {
        return "bg-gray-700 text-white";
      }
      return "bg-transparent text-black opacity-25";
    })(scaleNotes.indexOf(name));

    return (
      <div
        key={`${instString}-${fret}`}
        className={`relative relative text-center ${fretWire} p-2 octave-${octave} border-gray-600`}
      >
        <div className="absolute string inset-x-0 top-1/2 h-px bg-black opacity-25"></div>
        <div
          className={`noteName mx-auto w-8 p-2 rounded-full relative text-xs ${highlightColor} note-${name}`}
        >
          {name}
        </div>
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

  const handleInstrumentChange = ({ slug, name, tuning, frets }) => {
    setInstrument(slug);
    setFrets(frets);
    setTuning(tuning);
  };

  const handleScaleChange = ({ root, scale }) => {
    setRoot(root);
    setScale(scale);
    if (["G♭", "D♭", "A♭", "E♭", "B♭", "F"].indexOf(root) >= 0) {
      setFlats(true);
    } else {
      setFlats(false);
    }
  };

  return (
    <div className={className}>
      <div className="options mb-5 flex">
        <Instrument
          className="mr-2"
          instrument={instrument}
          handleChange={handleInstrumentChange}
        />
        <ScaleSelector
          root={root}
          scale={scale}
          handleChange={handleScaleChange}
        />
        <LayoutToggle className="mx-5" />
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
