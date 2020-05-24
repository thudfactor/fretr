import React, { useState } from "react";

export const instrumentRack = require("../utils/instrumentRack.json");

export const getInstrument = (slug) => {
  return instrumentRack.find((inst) => {
    return inst.slug === slug;
  });
};

export default function Instrument({
  instrument = "guitar",
  className = "",
  handleChange,
}) {
  const [tuning, setTuning] = useState(`${instrument}-standard`);

  const swapInstrument = (newInstrument) => {
    const inst = getInstrument(newInstrument);
    setTuning(`${inst.slug}-${inst.tunings[0].slug}`);
    handleChange({ ...inst, tuning: inst.tunings[0].strings });
  };

  const swapTuning = (newTuning) => {
    const inst = getInstrument(instrument);
    setTuning(newTuning);
    const slug = newTuning.split("-")[1];
    const tuningDeets = inst.tunings.find((t) => t.slug === slug);
    handleChange({ ...inst, tuning: tuningDeets.strings });
  };

  const availableTunings = getInstrument(instrument).tunings;

  return (
    <div className={className}>
      <label className="mr-6">
        Instrument
        <select
          className="border border-gray-600 mr-2 text-xl mx-4"
          name="instrument"
          value={instrument}
          onChange={(e) => swapInstrument(e.target.value)}
        >
          {instrumentRack.map((inst) => (
            <option key={`instrument-${inst.slug}`} value={inst.slug}>
              {inst.name}
            </option>
          ))}
        </select>
      </label>
      <label className="mr-6">
        Tuning
        <select
          className="border border-gray-600 text-xl mx-4"
          name="tuning"
          value={tuning}
          onChange={(e) => swapTuning(e.target.value)}
        >
          {availableTunings.map((t) => (
            <option
              key={`instrument-${instrument}-${t.slug}`}
              value={`${instrument}-${t.slug}`}
            >
              {t.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
