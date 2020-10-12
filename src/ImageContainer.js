import React from "react";
import "./ImageContainter.css";

export function ImageContainter({ styles }) {
  return (
    <div className="ImgContainter">
      <div className="textImageContainer" style={styles}>
        <p>Photo will appear here</p>
      </div>
    </div>
  );
}
