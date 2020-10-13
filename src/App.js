import React, { useState } from "react";
import "./styles.css";
import { CloseTopContainer } from "./closeTopContainter";
import { InfoContainer } from "./InfoContainer";
import { ImageContainter } from "./ImageContainer";
import { RowContainer } from "./RowContainer";
import { ProgressBars } from "./ProgressBars";

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

export default function App() {
  const [valueFilter, updatedValueFilter] = useState(0);
  const [options, setOptions] = useState(filtersObject);

  function handleChange({ target }) {
    filtersObject.map((filter, index) => {
      if (target.name === filter.name) {
        updatedValueFilter(target.value);
        filtersObject[index].value = valueFilter;
      }

      return null;
    });
  }

  function getImageStyle() {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });
    return { filter: filters.join(" ") };
  }

  console.log("Get Image Style: ", getImageStyle());

  return (
    <div className="imageContainer">
      <CloseTopContainer />
      <InfoContainer />
      {/* <ImageContainter styles={getImageStyle()} /> */}
      <ImageContainter styles={getImageStyle()} />
      <RowContainer>
        <ProgressBars
          filtersObject={filtersObject}
          handleChange={handleChange}
          // min={selectedOption.range.min}
          // max={selectedOption.range.max}
          // value={selectedOption.value}
          // handleChange={handleSliderChange}
          // titleFilert={titleFilert}
        />
        <div style={{ flex: 1 }}>
          <p>Progress Bar</p>
        </div>
      </RowContainer>
    </div>
  );
}
