const spacingExpansion = {
  "1px": "1px",
  "2px": "2px",
  "3px": "3px",
  "4px": "4px",
  "5px": "5px",
  "6px": "6px",
  "7px": "7px",
  "8px": "8px",
  "9px": "9px",
  "10px": "10px",
  "11px": "11px",
  "12px": "12px",
};


const gridRowExpansion = {
  "7": "7",
  "8": "8",
  "9": "9",
  "10": "10",
  "11": "11",
  "12": "12",
  "13": "13",
  "14": "14",
  "15": "15",
  "16": "16",
  "17": "17",
  "18": "18",
  "19": "19",
  "20": "20",
  "21": "21",
  "22": "22",
  "23": "23",
  "24": "24",
  "25": "25",
  "26": "26",
};

const gridColExpansion = {
  "13": "13",
  "14": "14",
  "15": "15",
  "16": "16",
  "17": "17",
  "18": "18",
  "19": "19",
  "20": "20",
  "21": "21",
  "22": "22",
  "23": "23",
  "24": "24",
  "25": "25",
  "26": "26",
};

const gridColSpanExpansion = {
  "span-13": "span 13 / span 13",
  "span-14": "span 14 / span 14",
  "span-15": "span 15 / span 15",
  "span-16": "span 16 / span 16",
  "span-17": "span 17 / span 17",
  "span-18": "span 18 / span 18",
  "span-19": "span 19 / span 19",
  "span-20": "span 20 / span 20",
  "span-21": "span 21 / span 21",
  "span-22": "span 22 / span 22",
  "span-23": "span 23 / span 23",
  "span-24": "span 24 / span 24",
  "span-25": "span 25 / span 25",
  "span-26": "span 26 / span 26",
  "span-27": "span 27 / span 27",
  "span-28": "span 28 / span 28",
  "span-29": "span 29 / span 29",
  "span-30": "span 30 / span 30",
};

const borderWidthsExpansion = {
  "1": "1px",
  "3": "3px",
  "5": "5px",
  "6": "6px",
  "7": "7px",
  "9": "9px",
  "10": "10px",
  "11": "11px",
  "12": "12px",
};

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
      spacing: spacingExpansion,
      borderWidth: borderWidthsExpansion,
      gridColumn: gridColSpanExpansion,
      gridColumnStart: gridColExpansion,
      gridColumnEnd: gridColExpansion,
      gridRowStart: gridRowExpansion,
      gridRowEnd: gridRowExpansion,
    },
    fontFamily: {
      'sans':['Noto Sans JP','Arial','Helvetica','sans'],
      'display':['Satisfy','serif']
    }
  },
  variants: {},
  plugins: [],
};
