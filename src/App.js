import React, { useState } from "react";
import "./styles.css";
import { CloseTopContainer } from "./closeTopContainter";
import { InfoContainer } from "./InfoContainer";
import { ImageContainter } from "./ImageContainer";
import { RowContainer } from "./RowContainer";
import { ProgressBars } from "./ProgressBars";
import { filtersObject } from "./filtersObject";

export default function App() {
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

  function getImageStyle() {
    const filters = filtersObject.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });
    return { filter: filters.join(" ") };
  }

  console.log("Get Image Style: ", getImageStyle());

  return (
    <div className="imageContainer">
      <CloseTopContainer />
      <InfoContainer />
      <ImageContainter styles={getImageStyle()} />
      <RowContainer>
        <ProgressBars
          filtersObject={filtersObject}
          handleChange={handleChange}
        />
        <div style={{ flex: 1 }}>
          <p>Progress Bar</p>
        </div>
      </RowContainer>
    </div>
  );
}
