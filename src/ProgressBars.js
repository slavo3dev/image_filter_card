import React from "react";
import "./ProgressBars.css";
import { SliderFilter } from "./SliderFIlter.js";

export function ProgressBars({ filtersObject, handleChange }) {
  const [showBars, isShowBars] = React.useState(true);

  function handleToggleBars() {
    showBars ? isShowBars(false) : isShowBars(true);
  }

  const btnTitle = showBars ? "Hide Filters" : "Show Filtes";
  return (
    <div className="ProgressBarsContainer">
      <div>
        <button onClick={handleToggleBars}>{btnTitle}</button>
      </div>
      {filtersObject.map((filterObj, index) => {
        return showBars ? (
          <SliderFilter
            key={index}
            min={filterObj.range.min}
            max={filterObj.range.max}
            value={filterObj.value}
            handleChange={handleChange}
            titleFilter={filterObj.name}
          />
        ) : null;
      })}
    </div>
  );
}
