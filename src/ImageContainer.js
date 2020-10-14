import React from "react";
import "./ImageContainter.css";

export function ImageContainter({ styles, img }) {
  const imageComponent = (
    <div className="main-image ImgContainter" style={styles} />
  );

  // const placeHolder = (
  //   <div className="ImgContainter">
  //     <div className="textImageContainer" style={styles}>
  //       <p>Photo will appear here</p>
  //     </div>
  //   </div>
  // );
  return imageComponent;
}
