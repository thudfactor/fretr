import React from "react";
import { rootNotes, getScaleList } from "../context/scales";
import Select from "./Select";

export default function ScaleSelector({
  root,
  scale,
  className,
  handleChange,
}) {
  function swapRoot(newRoot) {
    handleChange(newRoot, scale);
  }

  function swapScale(newScale) {
    handleChange(root, newScale);
  }

  const rootOptions = rootNotes.map((v) => {
    return { name: v, slug: v };
  });

  return (
    <div className={className}>
      <Select
        value={root}
        options={rootOptions}
        name="root"
        label="Root"
        onChange={swapRoot}
      />
      <Select
        value={scale}
        options={getScaleList()}
        name="scale"
        label="Scale"
        onChange={swapScale}
      />
    </div>
  );
}
