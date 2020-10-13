import React, { useState } from "react";
import "./styles.css";
import { CloseTopContainer } from "./closeTopContainter";
import { InfoContainer } from "./InfoContainer";
import { ImageContainter } from "./ImageContainer";
import { RowContainer } from "./RowContainer";
import { ProgressBars } from "./ProgressBars";

const filtersObject = {
  Brightness: {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: "%"
  },
  Contrast: {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: "%"
  },
  Saturation: {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: "%"
  },
  Invert: {
    name: "Invert",
    property: "invert",
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: "%"
  }
};

export default function App() {
  // const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  // const [options, setOptions] = useState(DEFAULT_OPTIONS);
  // const selectedOption = options[selectedOptionIndex];

  // function handleSliderChange({ target }) {
  //   setOptions((prevOptions) => {
  //     return prevOptions.map((option, index) => {
  //       if (index !== selectedOptionIndex) return option;
  //       return { ...option, value: target.value };
  //     });
  //   });
  // }

  // function handleSliderChange({ target }) {
  //   setOptions((prevOptions) => {
  //     return prevOptions.map((option, index) => {
  //       if (index !== selectedOptionIndex) return option;
  //       return { ...option, value: target.value };
  //     });
  //   });
  // }

  // function getImageStyle() {
  //   const filters = options.map((option) => {
  //     return `${option.property}(${option.value}${option.unit})`;
  //   });
  //   return { filter: filters.join(" ") };
  // }

  return (
    <div className="imageContainer">
      <CloseTopContainer />
      <InfoContainer />
      {/* <ImageContainter styles={getImageStyle()} /> */}
      <ImageContainter />
      <RowContainer>
        <ProgressBars
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
