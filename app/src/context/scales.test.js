import { findScale, makeScale } from "./scales";

test("unknown scales return null", () => {
  expect(findScale("fish")).toBeNull;
});

test("locrian slug return Locrian scale", () => {
  const scale = findScale("locrian");
  if (scale) {
    expect(scale.name).toBe("Locrian");
  } else {
    fail();
    // Scale is null
  }
});

test("Failing to find a scale name returns the chromatic scale at the root specified", () => {
  const scale = makeScale("A", "stupidian").join(" ");
  expect(scale).toBe("A A♯ B C C♯ D D♯ E F F♯ G G♯");
});

test("Failing to find a scale root returns an empty scale", () => {
  const scale = makeScale("Q", "stupidian").join(" ");
  expect(scale).toBe("");
});

test("Make a C Major scale", () => {
  const scale = makeScale("C", "ionian").join(" ");
  expect(scale).toBe("C D E F G A B");
});

test("Make an Am scale", () => {
  const scale = makeScale("A", "aeolian").join(" ");
  expect(scale).toBe("A B C D E F G");
});

test("Make a B♭ scale", () => {
  const scale = makeScale("B♭", "ionian").join(" ");
  expect(scale).toBe("B♭ C D E♭ F G A");
});

test("Make an A harmonic-minor scale", () => {
  const scale = makeScale("A", "harmonic-minor").join(" ");
  expect(scale).toBe("A B C D E F G♯");
});

test("Make an C major pentatonic scale", () => {
  const scale = makeScale("C", "major-pentatonic").join(" ");
  expect(scale).toBe("C D E G A");
});

test("Make an C minor pentatonic scale", () => {
  const scale = makeScale("C", "minor-pentatonic").join(" ");
  expect(scale).toBe("C D♯ F G A♯");
});

test("Make an E major blues scale", () => {
  const scale = makeScale("E", "major-blues").join(" ");
  expect(scale).toBe("E F♯ G G♯ B C♯");
});

test("Make an E minor blues scale", () => {
  const scale = makeScale("E", "minor-blues").join(" ");
  expect(scale).toBe("E G A A♯ B D");
});
