import sharpNotes from "./sharpNotes.json";
import flatNotes from "./flatNotes.json";

interface NoteInterface {
  name: string;
  octave: number;
}

export function noteToMidi(note: NoteInterface): number {
  const { name, octave } = note;
  if (octave < 0 || octave > 8) throw Error(`Octave out of range, ${octave}`);

  let noteIndex = sharpNotes.indexOf(name);
  if (noteIndex < 0) noteIndex = flatNotes.indexOf(name);
  if (noteIndex < 0) {
    throw Error(`Not an actual note, ${name}, ${noteIndex}`);
  }

  // Limit to piano notes, A0 to C8
  if ((octave === 0 && noteIndex < 9) || (octave === 8 && noteIndex > 0)) {
    throw Error(`Note out of range, ${name}${octave}`);
  }

  return 12 + noteIndex + octave * 12;
}

export function midiToNote(
  midiNumber: number,
  options = { flats: false }
): NoteInterface {
  const { flats } = options;

  if (midiNumber < 21 || midiNumber > 108)
    throw Error("Note number out of range " + midiNumber);

  const octave = Math.floor(midiNumber / 12) - 1;
  const name = flats ? flatNotes[midiNumber % 12] : sharpNotes[midiNumber % 12];

  return { name, octave };
}
