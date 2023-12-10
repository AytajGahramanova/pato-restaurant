import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="Blogs">
      <div className="Blogs-content">
        <span>Latest News</span>
        <p>THE BLOG</p>
      </div>
      <div
        className="Blogs-image"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div>
          <div className="Blog-image">
            <img
              src="https://preview.colorlib.com/theme/pato/images/blog-01.jpg"
              alt=""
              width="400px"
              className="zoom-image"
            />
            <div className="date " style={{ position: "absolute" }}>
              21 DEC 2017
            </div>
          </div>

          <div className="Blog-content"></div>
        </div>
        <div className="Blog">
          <div className="Blog-image">
            <img
              src="https://preview.colorlib.com/theme/pato/images/blog-02.jpg"
              alt=""
              width="400px"
              className="zoom-image"
            />
            <div className="date " style={{ position: "absolute" }}>
              15 DEC 2017
            </div>
          </div>
          <div className="Blog-content"></div>
        </div>
        <div className="Blog">
          <div className="Blog-image">
            <img
              src="https://preview.colorlib.com/theme/pato/images/blog-03.jpg"
              alt=""
              width="400px"
              className="zoom-image"
            />
            <div className="date " style={{ position: "absolute" }}>
              12 DEC 2017
            </div>
          </div>
          <div className="Blog-content"></div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
