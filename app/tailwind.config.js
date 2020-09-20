// The fretboard is generally a very large grid, so let's create a lot more
// grid classes than tailwind generally gives us.

// Handy range generator function to give us arrays of values
// between certain numbers.
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

// Tailwind configuration elements are all objects
// where the key is used as part of the class name
// and the value is the corresponding CSS property.
//
// Spreading across the range function will let us
// create these quite rapidly, as opposed to hand-writing
// the object litereals.
const spacingExpansion = Object.fromEntries(
  [...range(1, 12)].map((i) => [`${i}px`, `${i}px`])
);

// We can start this at 7 because tailwind provides 1-6
const gridRowExpansion = Object.fromEntries(
  [...range(7, 26)].map((i) => [i, `${i}`])
);

// similar
const gridColExpansion = Object.fromEntries(
  [...range(13, 26)].map((i) => [i, `${i}`])
);

// similar
const gridColSpanExpansion = Object.fromEntries(
  [...range(13, 30)].map((i) => [`span-${i}`, `span ${i} / span ${i}`])
);

const borderWidthsExpansion = Object.fromEntries(
  [...range(1, 12)].map((i) => [i, `${i}px`])
);

// TODO: Invalidate need for whitelistPatterns
// Whitelist patterns target fretboard layout classes that are composed programatically,
// in violation of tailwind best practices
module.exports = {
  // opt-in to early deprications, tw2.0 behavior
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: [
      "./src/**/*.tsx",
      "./src/**/*.js",
      "./src/**/*.html",
      "./public/**/*.html",
    ],
    options: { whitelistPatterns: [/(col|row)-(start|span|end)*/, /px$/] },
  },
  theme: {
    extend: {
      flex: {
        full: "1 1 100%",
      },
      inset: {
        "1/2": "50%",
      },
      spacing: spacingExpansion,
      borderWidth: borderWidthsExpansion,
      gridColumn: gridColSpanExpansion,
      gridColumnStart: gridColExpansion,
      gridColumnEnd: gridColExpansion,
      gridRowStart: gridRowExpansion,
      gridRowEnd: gridRowExpansion,
    },
    fontFamily: {
      sans: ["Noto Sans JP", "Arial", "Helvetica", "sans"],
      display: ["Satisfy", "serif"],
    },
  },
  variants: {},
  plugins: [],
};
