import React from "react";

export const instrumentRack = require("../utils/instrumentRack.json");

export const getInstrument = (slug) => {
  return instrumentRack.find((inst) => {
    return inst.slug === slug;
  });
};

export const getTuning = (instrument, tuning) => {
  const { tunings } = getInstrument(instrument);
  return tunings.find((t) => {
    return t.slug === tuning;
  });
};

export default function Instrument({
  instrument,
  tuning,
  className = "",
  handleChange,
}) {
  const availableTunings = instrument.tunings;

  const swapInstrument = (newInstrument) => {
    handleChange(
      getInstrument(newInstrument),
      getTuning(newInstrument, "standard")
    );
  };

  const swapTuning = (newTuning) => {
    handleChange(instrument, getTuning(instrument.slug, newTuning));
  };

  return (
    <div className={className}>
      <label className="mr-6">
        Instrument
        <select
          className="border border-gray-600 mr-2 text-xl mx-4"
          name="instrument"
          value={instrument.slug}
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
          value={tuning.slug}
          onChange={(e) => swapTuning(e.target.value)}
        >
          {availableTunings.map((t) => (
            <option
              key={`instrument-${instrument}-${t.slug}`}
              value={`${t.slug}`}
            >
              {t.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
