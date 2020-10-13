import React from "react";
import "./SliderFilter.css";

export function SliderFilter({ min, max, value, handleChange, titleFilter }) {
  console.log("----------------");
  console.log(titleFilter);
  console.log("Min: ", min);
  console.log("Max: ", max);
  console.log("Value: ", value);
  console.log("----------------");

  // return (
  //   <div className="slider-container">
  //     <p>{value}</p>
  //     <input
  //       type="range"
  //       className="slider"
  //       min={min}
  //       max={max}
  //       value={value}
  //       onChange={handleChanger}
  //     />
  //     <p>{titleFilter}</p>
  //   </div>
  // );

  // function handleChanger() {
  //   var v = value;

  //   return (value = v);
  // }

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
