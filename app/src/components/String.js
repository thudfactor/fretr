import React from "react";

export default function String({ frets, stringNumber, stringWidth }) {
  return (
    <div
      className={`relative string-${stringNumber + 1} col-start-1 col-span-${
        frets + 1
      }`}
    >
      <div
        className={`absolute top-1/2 left-0 right-0 h-${stringWidth}px -my-${
          stringWidth / 2
        }px bg-gray-500 opacity-25`}
      ></div>
    </div>
  );
}
