# Fretr app

## Getting started

I like to develop this project using a Docker container, but it is not strictly necessary. If you are not going to use docker, be aware that this project uses **Node 14.11**.

The docker image I use layers [ttyd](https://tsl0922.github.io/ttyd/) over the top of the official Node container. This lets you connect to `localhost:3001` to run commands on the container. So, to get started:

1. Install Docker if you haven't already.
2. Run `docker-compose up` in the project root (where this file is)
3. Point your browser to `localhost:3001.` You should get what looks like a terminal in your browser window.
4. `yarn install`
5. `yarn start`

## Implementation details

Fretr is a web application that helps fretted instrument musicians find and learn notes on their instrument fretboard. It potentially works for any fretted instrument with regularly spaced frets using 12-tone equal temperament. For example: the guitar, the ukulele, the baritone, and bass guitar, and the mandolin.

Instrument data is stored as a JSON data structure here: `/src/utils/instrumentRack.json`. In this data file you can set the number of frets, the position of inlays, and any tunings you want to provide for the instrument. For example, here is a definition for a four-string, 18-fret ukulele with standard ("Reentrant") and Low G tuning.

```json
{
  "slug": "ukulele",
  "name": "Ukulele",
  "frets": 18,
  "inlays": [5, 7, 10, 12],
  "tunings": [
    {
      "slug": "standard",
      "name": "C6 Reentrant",
      "strings": [67, 60, 64, 69],
      "stringWidth": [1, 6, 8, 2]
    },
    {
      "slug": "lowg",
      "name": "C6 Low G",
      "strings": [55, 60, 64, 69],
      "stringWidth": [1, 2, 4, 6]
    }
  ]
}
```

The array length of the `strings` property for a tuning dictates the number of strings the instrument has. This should be consistent across all tunings for this instrument. This means a seven-string guitar or a five-string bass should be defined as its own instrument, not an alternate tuning on a six-string. The numbers assigned to each string are the MIDI codes for the note played when the string is plucked open. In this convention, "Middle C" on a keyboard is `60`.

In addition to showing the notes on the fretboards of these instruments, Fretr can also display a variety of scales. Scales are defined independently of instruments here: `/src/utils/scales.json`. For example, here is a definition of the Ionian (or major) scale:

```json
{
  "slug": "ionian",
  "name": "Major (Ionian)",
  "description": "",
  "highlight": [],
  "formula": "2 2 1 2 2 2 1"
},
```

Scales are not defined by notes but by the relationships between the notes, starting at an arbitrary root note. That is, the difference between the 'A Major' scale and the 'F Major' scale is simply the starting position. The property `formula` in the list above describes the interval between each notes. '2' and '1' correspond to what music instructors typically call a 'Whole Step' and 'Half Step,' so the major scale pattern of `W W H W W W H` translates to `2 2 1 2 2 2 1` above. Numbers are used instead of letters because some scales (e.g., pentatonic) have more than a whole step between notes. The number representation also makes midi math convenient.
