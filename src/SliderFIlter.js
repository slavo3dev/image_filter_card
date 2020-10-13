import React from "react";
import "./SliderFilter.css";

export function SliderFilter({
  min,
  max,
  handleChange,
  value,
  titleFilter,
  handleClick
}) {
  // function handleChange({ target }) {
  //   console.log(target.value);
  //   return (value = target.value);
  // }

  console.log("Value: ", value);

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
        onClick={handleClick}
      />
      <p>{titleFilter}</p>
    </div>
  );
}
