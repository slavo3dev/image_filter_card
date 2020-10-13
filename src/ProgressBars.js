import React from "react";
import "./ProgressBars.css";
import { SliderFilter } from "./SliderFIlter.js";

export function ProgressBars({ filtersObject, handleChange }) {
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
