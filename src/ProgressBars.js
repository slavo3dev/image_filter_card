import React from "react";
import "./ProgressBars.css";
import { SliderFilter } from "./SliderFIlter.js";

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

export function ProgressBars() {
  function handleChange() {
    return { value: filtersObject.Brightness.values };
  }

  return (
    <div className="ProgressBarsContainer">
      <SliderFilter
        min={filtersObject.Brightness.range.min}
        max={filtersObject.Brightness.range.max}
        value={filtersObject.Brightness.value}
        handleChange={handleChange}
        titleFilter={"Brightness"}
      />
      <SliderFilter
        min={filtersObject.Contrast.range.min}
        max={filtersObject.Contrast.range.max}
        value={filtersObject.Contrast.value}
        handleChange={handleChange}
        titleFilter={"Contrast"}
      />
      <SliderFilter
        min={filtersObject.Saturation.range.min}
        max={filtersObject.Saturation.range.max}
        value={filtersObject.Saturation.value}
        handleChange={handleChange}
        titleFilter={"Saturation"}
      />
      <SliderFilter
        min={filtersObject.Invert.range.min}
        max={filtersObject.Invert.range.max}
        value={filtersObject.Invert.value}
        handleChange={handleChange}
        titleFilter={"Invert"}
      />
    </div>
  );
}
