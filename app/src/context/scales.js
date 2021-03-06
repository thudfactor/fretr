import scales from "./scales.json";
import flatNotes from "./flatNotes.json";
import sharpNotes from "./sharpNotes.json";

export const rootNotes = [
  "C",
  "G",
  "D",
  "A",
  "E",
  "B",
  "F♯",
  "G♭",
  "D♭",
  "A♭",
  "E♭",
  "B♭",
  "F",
];

export function findScale(slug) {
  return scales.find((el) => el.slug === slug);
}

export function getScaleList() {
  return scales.map(({ slug, name }) => {
    return { slug, name };
  });
}

export function makeScale(root, slug) {
  let flats = false;
  let noteSource = [];
  let rootIndex = sharpNotes.indexOf(root);
  if (rootIndex < 0) {
    rootIndex = flatNotes.indexOf(root);
    flats = true;
  }
  // now we can set our note source array
  if (rootIndex >= 0) {
    noteSource = flats ? flatNotes : sharpNotes;
  } else {
    return []; // if our root index is still less than 0, we couldn't find the note and must bail
  }
  let scaleType = findScale(slug);
  const formula = scaleType?.formula || "1 1 1 1 1 1 1 1 1 1 1 1";

  let notesAtRoot = noteSource.slice(rootIndex).concat(noteSource);

  const scale = formula.split(" ").map((v, i) => {
    const note = notesAtRoot[0];
    notesAtRoot = notesAtRoot.slice(parseInt(v));
    return note;
  });

  return scale;
}
