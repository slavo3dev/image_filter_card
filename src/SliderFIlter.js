import React from "react";
import "./SliderFilter.css";

export function SliderFilter({ min, max, handleChange, value, titleFilter }) {
  // function handleChange({ target }) {
  //   console.log(target.value);
  //   return (value = target.value);
  // }

  console.log("Value: ", value);

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
