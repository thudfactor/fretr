module.exports = {
  purge: {
    content: [
      "src/**/*.tsx",
      "src/**/*.jsx",
      "src/**/*.html",
      "public/**/*.html",
    ],
    options: {
      whitelist: ["bg-red-500", "px-4"],
    },
  },
  theme: {
    extend: {
      flex: {
        full: "1 1 100%",
      },
      inset: {
        "1/2": "50%",
      },
    },
  },
  variants: {},
  plugins: [],
};
