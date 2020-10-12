import React from "react";
import "./SliderFilter.css";

export function SliderFilter({ min, max, value, handleChange, titleFilter }) {
  return (
    <div className="slider-container">
      <p>{value}</p>
      <input
        type="range"
        className="slider"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
      <p>{titleFilter}</p>
    </div>
  );
}
