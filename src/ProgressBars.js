import React, { useState } from "react";
import "./ProgressBars.css";
import { SliderFilter } from "./SliderFIlter.js";

const filtersObject = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: "%"
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: "%"
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: "%"
  },
  {
    name: "Invert",
    property: "invert",
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: "%"
  }
];

export function ProgressBars() {
  // const [valueFilter, updatedValueFilter] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] = useState(filtersObject);
  const selectedOption = options[selectedOptionIndex];

  // function handleChange({ target }) {
  //   //  console.log(("Target value", target.value));
  //   const filters = filtersObject.
  // }

  // function handleChange({ target }) {
  //   filtersObject.map((filterObj, index) => {
  //     return { ...filterObj, value: target.value };
  //   });
  // }

  function handleSliderChange({ target }) {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option;
        return { ...option, value: target.value };
      });
    });
  }

  // function handleChange({ target }) {
  //   updatedValueFilter(target.value);
  // }

  return (
    <div className="ProgressBarsContainer">
      {filtersObject.map((filterObj, index) => {
        return (
          <SliderFilter
            key={index}
            min={filterObj.range.min}
            max={filterObj.range.max}
            value={filterObj.value}
            handleChange={handleSliderChange}
            titleFilter={filterObj.name}
          />
        );
      })}
    </div>
  );
}
