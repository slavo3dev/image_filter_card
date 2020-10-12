import React from "react";
import "./styles.css";
import { CloseTopContainer } from "./closeTopContainter";
import { InfoContainer } from "./InfoContainer";
import { ImageContainter } from "./ImageContainer";
export default function App() {
  return (
    <div className="imageContainer">
      <CloseTopContainer />
      <InfoContainer />
      <ImageContainter />
    </div>
  );
}
