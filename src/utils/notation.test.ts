import { noteToMidi, midiToNote } from "./notation";

test("returns middle C", () => {
  const middleC = midiToNote(60);
  expect(middleC.note).toBe("C");
  expect(middleC.octave).toBe(4);
});

test("returns middle C with flats", () => {
  const { note, octave } = midiToNote(60, { flats: true });
  expect(note).toBe("C");
  expect(octave).toBe(4);
});

test("returns F#3", () => {
  const { note, octave } = midiToNote(54);
  expect(note).toBe("F♯");
  expect(octave).toBe(3);
});

test("returns Gb3", () => {
  const { note, octave } = midiToNote(54, { flats: true });
  expect(note).toBe("G♭");
  expect(octave).toBe(3);
});

test("returns lower bound", () => {
  const { note, octave } = midiToNote(21);
  expect(note).toBe("A");
  expect(octave).toBe(0);
});

test("returns upper bound", () => {
  const highestC = midiToNote(108);
  expect(highestC.note).toBe("C");
  expect(highestC.octave).toBe(8);
});

test("throws on low values", () => {});

test("throws on high values", () => {
  expect(() => {
    midiToNote(20);
  }).toThrow();
});

test("throws on high values", () => {
  expect(() => {
    midiToNote(109);
  }).toThrow();
});
