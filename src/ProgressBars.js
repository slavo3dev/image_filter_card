import React, { useState } from "react";
import "./ProgressBars.css";
import { SliderFilter } from "./SliderFIlter.js";

// const filtersObject = [
//   {
//     name: "Brightness",
//     property: "brightness",
//     value: 100,
//     range: {
//       min: 0,
//       max: 200
//     },
//     unit: "%"
//   },
//   {
//     name: "Contrast",
//     property: "contrast",
//     value: 100,
//     range: {
//       min: 0,
//       max: 200
//     },
//     unit: "%"
//   },
//   {
//     name: "Saturation",
//     property: "saturate",
//     value: 100,
//     range: {
//       min: 0,
//       max: 200
//     },
//     unit: "%"
//   },
//   {
//     name: "Invert",
//     property: "invert",
//     value: 0,
//     range: {
//       min: 0,
//       max: 100
//     },
//     unit: "%"
//   }
// ];

export function ProgressBars({ filtersObject }) {
  const [valueFilter, updatedValueFilter] = useState(0);

  function handleChange({ target }) {
    filtersObject.map((filter, index) => {
      if (target.name === filter.name) {
        updatedValueFilter(target.value);
        filtersObject[index].value = valueFilter;
      }

      return null;
    });
  }

  console.log("filtersObject: ", filtersObject);

  return (
    <div className="ProgressBarsContainer">
      {filtersObject.map((filterObj, index) => {
        return (
          <SliderFilter
            key={index}
            min={filterObj.range.min}
            max={filterObj.range.max}
            value={filterObj.value}
            handleChange={handleChange}
            titleFilter={filterObj.name}
          />
        );
      })}
    </div>
  );
}
