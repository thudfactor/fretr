import React, { useState } from "react";

export const instrumentRack = [
  {
    slug: "ukulele",
    name: "Ukulele",
    frets: 18,
    tunings: [
      {
        slug: "standard",
        name: "Standard",
        strings: [67, 60, 64, 69],
      },
      {
        slug: "lowg",
        name: "Low G",
        strings: [55, 60, 64, 69],
      },
    ],
  },
  {
    slug: "guitar",
    name: "Guitar",
    frets: 24,
    tunings: [
      {
        slug: "standard",
        name: "Standard",
        strings: [40, 45, 50, 55, 59, 64],
      },
      {
        slug: "dropd",
        name: "Drop D",
        strings: [38, 45, 50, 55, 59, 64],
      },
      {
        slug: "dadgad",
        name: "DADGAD",
        strings: [38, 45, 50, 55, 57, 62],
      },
    ],
  },
  {
    slug: "bass",
    name: "Bass",
    frets: 20,
    tunings: [
      {
        slug: "standard",
        name: "Standard",
        strings: [28, 33, 38, 43],
      },
      {
        slug: "dropd",
        name: "Drop D",
        strings: [26, 33, 38, 43],
      },
    ],
  },
];

export const getInstrument = (slug) => {
  return instrumentRack.find((inst) => {
    return inst.slug === slug;
  });
};

export default function Instrument({ instrument = "guitar", handleChange }) {
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
    console.log(tuningDeets);
    handleChange({ ...inst, tuning: tuningDeets.strings });
  };

  const availableTunings = getInstrument(instrument).tunings;

  return (
    <>
      <select
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
      <select
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
    </>
  );
}
