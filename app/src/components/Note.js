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
        className={`noteName mx-auto w-8 font-medium p-1 rounded-md relative text-xs ${highlightColor} note-${noteName}`}
      >
        {noteName}
      </div>
    </div>
  );
}
