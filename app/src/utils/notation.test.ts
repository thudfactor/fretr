import { noteToMidi, midiToNote } from "./notation";

test("returns middle C", () => {
  const middleC = midiToNote(60);
  expect(middleC.name).toBe("C");
  expect(middleC.octave).toBe(4);
});

test("returns middle C with flats", () => {
  const { name, octave } = midiToNote(60, { flats: true });
  expect(name).toBe("C");
  expect(octave).toBe(4);
});

test("returns F♯3", () => {
  const { name, octave } = midiToNote(54);
  expect(name).toBe("F♯");
  expect(octave).toBe(3);
});

test("returns G♭3", () => {
  const { name, octave } = midiToNote(54, { flats: true });
  expect(name).toBe("G♭");
  expect(octave).toBe(3);
});

test("returns lower bound", () => {
  const { name, octave } = midiToNote(21);
  expect(name).toBe("A");
  expect(octave).toBe(0);
});

test("returns upper bound", () => {
  const { name, octave } = midiToNote(108);
  expect(name).toBe("C");
  expect(octave).toBe(8);
});

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

test("Returns 60 for middle C", () => {
  const noteID = noteToMidi({ name: "C", octave: 4 });
  expect(noteID).toBe(60);
});

test("Returns 108 for C8", () => {
  const noteID = noteToMidi({ name: "C", octave: 8 });
  expect(noteID).toBe(108);
});

test("Returns 21 for A0", () => {
  const noteID = noteToMidi({ name: "A", octave: 0 });
  expect(noteID).toBe(21);
});

test("Returns 32 for G♯", () => {
  const noteID = noteToMidi({ name: "G♯", octave: 1 });
  expect(noteID).toBe(32);
});

test("Returns 32 for A♭", () => {
  const noteID = noteToMidi({ name: "A♭", octave: 1 });
  expect(noteID).toBe(32);
});

test("Returns 32 for A♭", () => {
  const noteID = noteToMidi({ name: "A♭", octave: 1 });
  expect(noteID).toBe(32);
});

test("throws on nonexistant notes", () => {
  expect(() => {
    noteToMidi({ name: "C♭", octave: 1 });
  }).toThrow();
});

test("throws on super low notes", () => {
  expect(() => {
    noteToMidi({ name: "C", octave: 0 });
  }).toThrow();
});

test("throws on super high notes", () => {
  expect(() => {
    noteToMidi({ name: "A", octave: 8 });
  }).toThrow();
});

test("throws on low octaves", () => {
  expect(() => {
    noteToMidi({ name: "A", octave: -1 });
  }).toThrow();
});

test("throws on high octaves", () => {
  expect(() => {
    noteToMidi({ name: "A", octave: 10 });
  }).toThrow();
});
