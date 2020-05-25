import { findScale, makeScale } from "../utils/scales";
import { midiToNote } from "../utils/notation";
import Instrument, { getInstrument } from "../controls/Instruments";
import React, { useState } from "react";
import ScaleSelector from "../controls/ScaleSelector";
import Note from "./Note";

export default function Fretboard({ className = "" }) {
  const defaultInstrument = getInstrument("ukulele");

  const [instrument, setInstrument] = useState(defaultInstrument.slug);
  const [frets, setFrets] = useState(defaultInstrument.frets);
  const [tuning, setTuning] = useState(defaultInstrument.tunings[0].strings); // standard GCEA re-entrant tuning for the ukulele
  const [stringWidths, setStringWidths] = useState(
    defaultInstrument.tunings[0].stringWidth
  );
  const [flats, setFlats] = useState(false);
  const [scale, setScale] = useState("major-blues");
  const [root, setRoot] = useState("E");
  const [inlays, setInlays] = useState(defaultInstrument.inlays);

  const scaleNotes = makeScale(root, scale);

  const note = (instString, fret, stringReport) => {
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
      <Note
        key={`${instString}-${fret}`}
        fretWire={fretWire}
        octave={octave}
        highlightColor={highlightColor}
        noteName={name}
        fretNumber={fret}
        stringNumber={stringReport}
      />
    );
  };

  const notes = [];

  for (let fret = 0; fret <= frets; fret++) {
    // interestingly, fretted instruments count from 0 as well
    for (let string = 0; string < tuning.length; string++) {
      // Strings are always numbered starting at string closest to the floor,
      // which is the opposite way we have them ordered.
      const stringReport = tuning.length - string;
      notes.push(note(string, fret, stringReport));
    }
  }

  const handleInstrumentChange = ({ slug, inlays, tuning, frets }) => {
    setInstrument(slug);
    setInlays(inlays);
    setFrets(frets);
    console.log(tuning);
    setTuning(tuning.strings);
    setStringWidths(tuning.stringWidth);
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
      </div>
      <div className={`bg-white grid gap-0 bx-2 strings-${tuning.length}`}>
        {inlays.map((pos) => (
          <div
            className={`relative row-start-1 col-start-${pos + 1} col-end-${
              pos + 2
            } row-end-${tuning.length + 1}`}
          >
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 -rotate-90 top-1/2 left-1/2 text-4xl leading-none">
              {pos === 12 ? "••" : "•"}
            </div>
          </div>
        ))}
        {stringWidths.map((sw, i) => (
          <div
            key={`string-${i + 1}`}
            className={`relative string-${i + 1} col-start-1 col-span-${
              frets + 1
            }`}
          >
            <div
              className={`absolute top-1/2 left-0 right-0 h-${sw}px -my-${
                sw / 2
              }px bg-black opacity-25`}
            ></div>
          </div>
        ))}
        {notes}
      </div>
    </div>
  );
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
