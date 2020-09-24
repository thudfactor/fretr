import React from "react";

export default function Select({ value, options, label, name, onChange }) {
  return (
    <label className="mr-6">
      <span className="text-white">{label}</span>
      <select
        name={name}
        value={value}
        className="border border-gray-600 mr-2 text-base p-2 mx-4"
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((o) => (
          <option key={`name-${o.slug}`} value={o.slug}>
            {o.name}
          </option>
        ))}
      </select>
    </label>
  );
}
