import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import Image1 from "../../../../assets/slide1-01.jpg.webp";
import Image2 from "../../../../assets/master-slides-02.jpg.webp";
import Image3 from "../../../../assets/master-slides-01.jpg.webp";
import "../../Home/sections/Main.css";
import "../../../../assets/base.css";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

const Home = () => {
  return (
    <div style={{position: "relative"}}>
      <Swiper 
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper" 
      >
        <SwiperSlide style={{ position: "relative" }}>
          <div className="main-content">
            <p>𝒲𝑒𝓁𝒸𝑜𝓂𝑒 𝓉𝑜</p>
            <p className="title">pato place</p>
            <button className="main-button">Look Menu</button>
          </div>
          <div style={{ width: "100%", height: "100%" }}>
            <img
              src={Image1}
              alt="salam"
              style={{ width: "100%", height: "700px" }}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ position: "relative" }}>
          <div className="main-content">
            <p>𝒲𝑒𝓁𝒸𝑜𝓂𝑒 𝓉𝑜</p>
            <p className="title">pato place</p>
            <button className="main-button">Look Menu</button>
          </div>
          <div style={{ width: "100%", height: "100%" }}>
            <img
              src={Image2}
              alt="salam"
              style={{ width: "100%", height: "700px" }}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ position: "relative" }}>
          <div className="main-content">
            <p>𝒲𝑒𝓁𝒸𝑜𝓂𝑒 𝓉𝑜</p>
            <p className="title">pato place</p>
            <button className="main-button">Look Menu</button>
          </div>
          <div style={{ width: "100%", height: "100%" }}>
            <img
              src={Image3}
              alt="salam"
              style={{ width: "100%", height: "700px" }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
