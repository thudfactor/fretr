import instruments from "./instrumentRack.json";

export function getAllInstruments() {
  return instruments;
}

// Find the full representation of an instrument given the slug name of
// the instrument.
export const getInstrument = (instrumentSlug) => {
  return instruments.find((inst) => {
    return inst.slug === instrumentSlug;
  });
};

// Filters down the instrument list
export const getInstrumentList = () => {
  return instruments.map(({ name, slug }) => {
    return { name, slug };
  });
};

// Find a specific tuning for an instrument, given both an instrument
// slug and the tuning slug
export const getTuning = (instrumentSlug, tuningSlug) => {
  const { tunings } = getInstrument(instrumentSlug);
  return tunings.find((inst) => {
    return inst.slug === tuningSlug;
  });
};
