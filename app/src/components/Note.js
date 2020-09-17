import React from "react";

export default function Note({
  fretWire,
  octave,
  highlightColor,
  noteName,
  stringNumber,
  fretNumber,
}) {
  return (
    <div
      className={`note relative text-center p-2 border-gray-600 ${fretWire} octave-${octave} string-${stringNumber} fret-${fretNumber}`}
    >
      <div
        className={`noteName mx-auto w-12 font-bold p-2 rounded-full relative text-base ${highlightColor} note-${noteName}`}
      >
        {noteName}
      </div>
    </div>
  );
}
