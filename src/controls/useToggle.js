import React, { useState } from "react";

const useToggle = (label, defaultState) => {
  const [state, setState] = useState(defaultState);
  const id = `use-toggle-${label.replace(" ", "").toLowerCase()}`;
  const Toggle = () => (
    <div class="flex items-center">
      <input
        type="checkbox"
        className="mr-2"
        checked={state}
        id={id}
        onChange={(e) => setState(!state)}
        onBlur={(e) => setState(!state)}
      />
      <label htmlFor={id} className="text-xl">
        {label}
      </label>
    </div>
  );
  return [state, Toggle, setState];
};

export default useToggle;
