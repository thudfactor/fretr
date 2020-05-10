const sharpNotes = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

const flatNotes = [
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
];

export function noteToMidi(note, octave) {}

export function midiToNote(midiNumber) {
  if (midiNumber < 0) throw Error("Note number out of range");
  if (midiNumber > 127) throw Error("Note number out of range");

  const octive = Math.floor(midiNumber / 12);
  const note = sharpNotes[midiNumber % 12];

  return `${note}${octive}`;
}
