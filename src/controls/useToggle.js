import React, { useState } from "react";

const useToggle = (label, defaultState) => {
  console.log(label);
  const [state, setState] = useState(defaultState);
  const id = `use-toggle-${label.replace(" ", "").toLowerCase()}`;
  const Toggle = () => (
    <label htmlFor={id}>
      <input
        type="checkbox"
        checked={state}
        id={id}
        onChange={(e) => setState(!state)}
        onBlur={(e) => setState(!state)}
      />
      {label}
    </label>
  );
  return [state, Toggle, setState];
};

export default useToggle;
