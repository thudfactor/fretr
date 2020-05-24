import React, { useState } from "react";

const useToggle = (label, defaultState) => {
  const [state, setState] = useState(defaultState);
  const id = `use-toggle-${label.replace(" ", "").toLowerCase()}`;
  const Toggle = ({ className = "", disabled = false }) => (
    <div
      className={`flex items-center ${className} ${
        disabled ? "text-gray-500" : "text-black"
      }`}
    >
      <label htmlFor={id} className="text-xl">
        <input
          type="checkbox"
          className="mr-2"
          checked={state}
          id={id}
          onChange={(e) => setState(!state)}
          onBlur={(e) => setState(!state)}
          disabled={disabled}
        />
        {label}
      </label>
    </div>
  );
  return [state, Toggle, setState];
};

export default useToggle;
