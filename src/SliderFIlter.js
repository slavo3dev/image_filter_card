import React from "react";
import "./SliderFilter.css";

export function SliderFilter({ min, max, handleChange, value, titleFilter }) {
  return (
    <div className="slider-container">
      <p>{value}</p>
      <input
        className="slider"
        type="range"
        name={titleFilter}
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
      <p>{titleFilter}</p>
    </div>
  );
}
