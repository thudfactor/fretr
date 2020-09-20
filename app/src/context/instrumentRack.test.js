import instruments from "./instrumentRack.json";
import {
  getAllInstruments,
  getInstrument,
  getTuning,
} from "./instrumentRack.js";

test("GetAllInstruments returns an array of instruments", () => {
  const loadedInstruments = getAllInstruments();
  expect(loadedInstruments).toMatchObject(instruments);
});

test("Get a guitar off the rack", () => {
  const guitar = getInstrument("guitar");
  expect(guitar.slug).toBe("guitar");
});

test("fail to get a flugelhorn off the rack", () => {
  const flugelhorn = getInstrument("flugelhorn");
  expect(flugelhorn).toBeUndefined();
});

test("Get the standard tuning for a ukulele", () => {
  const ukeStd = getTuning("ukulele", "standard");
  expect(ukeStd.slug).toBe("standard");
});
