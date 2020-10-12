import React from "react";
import "./ProgressBars.css";
import { SliderFilter } from "./SliderFIlter.js";

export function ProgressBars({ min, max, handleChange, value }) {
  return (
    <div className="ProgressBarsContainer">
      <SliderFilter
        min={min}
        max={max}
        value={value}
        // handleChange={handleSliderChange}
        titleFilter={"Brightness"}
      />
      <SliderFilter
        min={min}
        max={max}
        value={value}
        // handleChange={handleSliderChange}
        titleFilter={"Contrast"}
      />
      <SliderFilter
        min={min}
        max={max}
        value={value}
        // handleChange={handleSliderChange}
        titleFilter={"Saturation"}
      />
      <SliderFilter
        min={min}
        max={max}
        value={value}
        // handleChange={handleSliderChange}
        titleFilter={"Invert Colors"}
      />
    </div>
  );
}
