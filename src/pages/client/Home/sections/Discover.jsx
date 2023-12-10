import React from "react";

const Discover = () => {
  return (
    <div className="discover-wrapper">
      <div className="discover-wrapper-image" style={{ position: "relative" }}>
        <img
          src="https://preview.colorlib.com/theme/pato/images/bg-intro-01.jpg.webp"
          alt=""
          style={{ width: "100%", height: "350px", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            width: "100%",
          }}
        >
          <span
            style={{
              color: "#d61c22",
              fontSize: "30px",
              lineHeight: "1.2",
              fontFamily: "Courgette",
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            Discover
          </span>
          <h3
            style={{
              color: "#fff",
              fontSize: "50px",
              fontWeight: "bold",
              lineHeight: "1.2",
              letterSpacing: "10px",
              wordSpacing: "6px",
            }}
          >
            PATO PLACE
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Discover;
