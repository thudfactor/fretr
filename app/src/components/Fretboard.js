import { findScale, makeScale } from "../context/scales";
import { midiToNote } from "../context/notation";
import { getInstrument, getTuning } from "../context/instrumentRack";
import InstrumentSelector from "../controls/InstrumentSelector";
import React, { useState } from "react";
import ScaleSelector from "../controls/ScaleSelector";
import Note from "./Note";
import Inlay from "./Inlay";
import String from "./String";
import storageAvailable from "storage-available";

const canUseStorage = storageAvailable("localStorage");

const showFlats = (root) => {
  return ["G♭", "D♭", "A♭", "E♭", "B♭", "F"].indexOf(root) >= 0;
};

export default function Fretboard({ className = "" }) {
  const defaultState = {
    instrument: "ukulele",
    tuning: "standard",
    root: "C",
    scale: "ionian",
  };

  const fretrState = canUseStorage
    ? { ...defaultState, ...JSON.parse(localStorage.getItem("fretrState")) }
    : defaultState;

  const defaultInstrument = getInstrument(fretrState.instrument);
  const defaultTuning = getTuning(fretrState.instrument, fretrState.tuning);

  const [instrument, setInstrument] = useState(defaultInstrument);
  const [tuning, setTuning] = useState(defaultTuning);
  const [scale, setScale] = useState(fretrState.scale);
  const [root, setRoot] = useState(fretrState.root);

  const scaleNotes = makeScale(root, scale);

  const { inlays, frets } = instrument;
  const { stringWidth, strings } = tuning;

  const note = (instString, fret, stringReport) => {
    const fretWire = fret === 0 ? "border-r-4" : "border-r";
    const { name, octave } = midiToNote(strings[instString] + fret, {
      flats: showFlats(root),
    });

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
    for (let string = 0; string < strings.length; string++) {
      // Strings are always numbered starting at string closest to the floor,
      // which is the opposite way we have them ordered.
      const stringReport = strings.length - string;
      notes.push(note(string, fret, stringReport));
    }
  }

  const handleInstrumentChange = (newInstrument, newTuning) => {
    if (canUseStorage) {
      const newFretrState = {
        instrument: newInstrument.slug,
        tuning: newTuning.slug,
        root,
        scale,
      };
      localStorage.setItem("fretrState", JSON.stringify(newFretrState));
    }
    setInstrument(newInstrument);
    setTuning(newTuning);
  };

  const handleScaleChange = (newRoot, newScale) => {
    if (canUseStorage) {
      const newFretrState = {
        instrument: instrument.slug,
        tuning: tuning.slug,
        root: newRoot,
        scale: newScale,
      };
      localStorage.setItem("fretrState", JSON.stringify(newFretrState));
    }
    setRoot(newRoot);
    setScale(newScale);
  };

  return (
    <div className={className}>
      <div className="options mb-5 flex">
        <InstrumentSelector
          className="mr-2"
          instrument={instrument}
          tuning={tuning}
          handleChange={handleInstrumentChange}
        />
        <ScaleSelector
          root={root}
          scale={scale}
          handleChange={handleScaleChange}
        />
      </div>
      <div
        className={`bg-white grid gap-0 max-w-full overflow-x-scroll bx-2 strings-${tuning.length}`}
      >
        {inlays.map((fret) => (
          <Inlay
            key={`inlay-${fret}`}
            fret={fret}
            numStrings={tuning.strings.length}
          />
        ))}
        {stringWidth.map((sw, i) => (
          <String
            key={`string-${i + 1}`}
            frets={frets}
            stringNumber={i}
            stringWidth={sw}
          />
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
