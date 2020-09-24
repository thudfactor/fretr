import React from "react";

export default function Instruction() {
  return (
    <div className="editorial p-5 text-xl leading-loose font-serif text-gray-100">
      <div class="max-w-3xl mx-auto">
        <h1 class="font-xl font-semibold mb-5">Welcome to Fretr!</h1>
        <p className="mb-5">
          <i>Fretr</i> is a visualization tool for fretted instruments like the
          ukulele, the guitar, and the bass. You can change your instrument,
          select from a common tuning, choose a scale, and select a root note in
          the controls above. Fretr will then show you the notes on the
          fretboard for that instrument, tuning, and scale.
        </p>
        <p>Notice the following:</p>
        <ul class="my-10 mx-5 list-disc">
          <li class="mb-5">
            All notes in the current scale are highlighted. The root note is
            highlighted in green.
          </li>
          <li class="mb-5">
            Some scales, like the Blues scales, have special notes as as well.
            These notes are highlighted in blue. (For the blues scale, this is
            the "blue note.")
          </li>
          <li class="mb-5">
            The background colors behind the fretboard display octave ranges. If
            two notes of the same name also have the same background color,
            these are exactly the same note. If they are on two different
            background colors, they are the same note name, but in a different
            octave.
          </li>
          <li class="mb-5">Octave colors are consistant across instruments.</li>
        </ul>
        <p class="mb-20">
          For more technical information or to find out how to contrubute
          tunings or instrument defintions,{" "}
          <a href="https://github.com/thudfactor/fretr">see the github repo</a>.
        </p>
      </div>
    </div>
  );
}
