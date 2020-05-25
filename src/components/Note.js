import React from "react";

export default function Note({ fretWire, octave, highlightColor, noteName }) {
  return (
    <div
      className={`relative text-center p-2 border-gray-600 ${fretWire} octave-${octave}`}
    >
      <div className="absolute string inset-x-0 top-1/2 h-px bg-black opacity-25"></div>
      <div
        className={`noteName mx-auto w-8 p-2 rounded-full relative text-xs ${highlightColor} note-${noteName}`}
      >
        {noteName}
      </div>
    </div>
  );
}
