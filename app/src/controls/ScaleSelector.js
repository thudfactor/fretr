import React from "react";
import scales from "../utils/scales.json";

export default function ScaleSelector({
  root,
  scale,
  className,
  handleChange,
}) {
  const rootNotes = [
    "C",
    "G",
    "D",
    "A",
    "E",
    "B",
    "F♯",
    "G♭",
    "D♭",
    "A♭",
    "E♭",
    "B♭",
    "F",
  ];
  return (
    <div className={className}>
      <label>
        Root
        <select
          className="border border-gray-600 mr-2 text-xl mx-4"
          name="rootNotes"
          value={root}
          onChange={(e) => handleChange(e.target.value, scale)}
        >
          {rootNotes.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </label>
      <label>
        Scale
        <select
          className="border border-gray-600 mr-2 text-xl mx-4"
          name="scale"
          value={scale}
          onChange={(e) => handleChange(root, e.target.value)}
        >
          {scales.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
