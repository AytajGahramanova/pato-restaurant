import React from "react";
import "./OurStory.css";
const OurStory = () => {
  return (
    <div className="OurStory-wrapper">
      <div className="ourstory">
        <div className="content">
          <span className="ourtstory-span">Italian Restaurant</span>
          <h3 className="ourstory-title">Welcome</h3>
          <p className="ourstory-p">
            Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed
            fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac
            facilisis ligula sem id neque
          </p>
        </div>
        <div className="image-container" style={{overflow: "hidden", borderRadius: "10px"}}>
          <img
            src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg.webp"
            alt=""
            style={{ width: "390px", borderRadius: "10px"}}
            className="zoom-image"
          />
        </div>
      </div>
    </div>
  );
};
export default OurStory;
