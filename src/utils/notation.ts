import sharpNotes from "./sharpNotes.json";
import flatNotes from "./flatNotes.json";

export function noteToMidi(note: string, octave: number) {}

export function midiToNote(midiNumber: number, options = { flats: false }) {
  const { flats } = options;

  if (midiNumber < 21) throw Error("Note number out of range " + midiNumber);
  if (midiNumber > 108) throw Error("Note number out of range " + midiNumber);

  const octave = Math.floor(midiNumber / 12) - 1;
  const note = flats ? flatNotes[midiNumber % 12] : sharpNotes[midiNumber % 12];

  return { note, octave };
}
