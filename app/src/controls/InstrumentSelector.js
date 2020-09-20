import React from "react";
import Select from "./Select";
import {
  getInstrument,
  getTuning,
  getInstrumentList,
} from "../context/instrumentRack";

//export const instrumentRack = require("../context/instrumentRack.json");

export default function InstrumentSelector({
  instrument,
  tuning,
  className = "",
  handleChange,
}) {
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
      <Select
        value={instrument.slug}
        options={getInstrumentList()}
        name="instrument"
        label="Instrument"
        onChange={swapInstrument}
      />
      <Select
        value={tuning.slug}
        options={instrument.tunings}
        name="tuning"
        label="Tuning"
        onChange={swapTuning}
      />
    </div>
  );
}
