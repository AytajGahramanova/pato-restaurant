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

          <div className="Blog-content">
            <h4>BEST PLACES FOR WINE</h4>
            <p>
              Phasellus lorem enim, luctus ut velit eget, con-vallis egestas
              eros.
            </p>
            <a href="">Continue Reading</a>
          </div>
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

          <div className="Blog-content">
            <h4>Eggs and Cheese</h4>
            <p>
              Duis elementum, risus sit amet lobortis nunc justo condimentum
              ligula, vitae feugiat
            </p>
            <a href="">Continue Reading</a>
          </div>
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

          <div className="Blog-content">
            <h4>Style the Wedding Party</h4>
            <p>
              Sed ornare ligula eget tortor tempor, quis porta tellus dictum.
            </p>
            <a href="">Continue Reading</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
