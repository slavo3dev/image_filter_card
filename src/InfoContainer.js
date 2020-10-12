import React from "react";
import "./InfoContainer.css";

export function InfoContainer() {
  return (
    <div className="infoContainer">
      <div className="infoTextIconContainer">
        <div className="IconContainer">
          <p>ICON</p>
        </div>
        <div className="infoTextContainer">
          <p>Please Say it</p>
        </div>
      </div>
      <div className="textInfoContainer">
        <p>
          “Please carefully hold your test card up to your camera and take a
          photo.”
        </p>
      </div>
    </div>
  );
}
