import React from "react";
import "./styles.css";
import { CloseTopContainer } from "./closeTopContainter";
import { InfoContainer } from "./InfoContainer";
import { ImageContainter } from "./ImageContainer";
import { RowContainer } from "./RowContainer";
import { ProgressBars } from "./ProgressBars";
export default function App() {
  return (
    <div className="imageContainer">
      <CloseTopContainer />
      <InfoContainer />
      <ImageContainter />
      <RowContainer>
        <ProgressBars />
        <div style={{ flex: 1, border: "1px solid yellow" }}>
          <p>Progress Bar</p>
        </div>
      </RowContainer>
    </div>
  );
}
