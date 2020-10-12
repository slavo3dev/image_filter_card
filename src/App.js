import React from "react";
import "./styles.css";
import { CloseTopContainer } from "./closeTopContainter";
import { InfoContainer } from "./InfoContainer";
export default function App() {
  return (
    <div className="imageContainer">
      <CloseTopContainer />
      <InfoContainer />
    </div>
  );
}
