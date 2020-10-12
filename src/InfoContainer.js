import React from "react";
import "./InfoContainer.css";

export function InfoContainer() {
  return (
    <div className="infoContainer">
      <div className="infoIcon">
        <div>
          <p>ICON</p>
        </div>
        <div>
          <p>Please Say it</p>
        </div>
      </div>
      <div className="closeBtnContainer">
        <p>x</p>
      </div>
    </div>
  );
}
