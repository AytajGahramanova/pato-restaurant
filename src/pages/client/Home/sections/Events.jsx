import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import image1 from "../../../../assets/bg-event-01.jpg.webp";
import image2 from "../../../../assets/bg-event-02.jpg.webp";
import image3 from "../../../../assets/bg-event-04.jpg.webp";
import "../../../../assets/base.css";
import "../../../../pages/client/Home/sections/Events.css";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Events = () => {
  return (
    <div style={{ marginTop: 40 }}>
      <Swiper
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwipper"
        cssMode={true}
        pagination={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide style={{ position: "relative" }}>
          <div className="Events">
            <div>
              <span style={{fontFamily: "Arial", fontStyle: "italic"}}>Upcomming</span>
              <h3 style={{fontWeight: "bold", fontFamily: "Arial"}}>Events</h3>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <div className="events-image">
                <img
                  src="https://preview.colorlib.com/theme/pato/images/event-02.jpg.webp"
                  alt=""
                  width="100%"
                />
              </div>
              <div className="events-content">
                <h4>Wines during specific nights</h4>
                <p className="events-content-p">
                  Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis
                  est. Sed fringilla, nunc sed imperdiet lacinia
                </p>
                <div className="times">
                  <div className="days">
                    <span style={{ fontFamily: "Arial", fontSize: 45 }}>
                      <b>00</b>
                    </span>
                    <p style={{ color: "rgba(0,0,0,0.5)" }}>
                      <b>DAYS</b>
                    </p>
                  </div>
                  <div className="days">
                    <span style={{ fontFamily: "Arial", fontSize: 45 }}>
                      <b>00</b>
                    </span>
                    <p style={{ color: "rgba(0,0,0,0.5)" }}>
                      <b>HOURS</b>
                    </p>
                  </div>
                  <div className="days">
                    <span style={{ fontFamily: "Arial", fontSize: 45 }}>
                      <b>00</b>
                    </span>
                    <p style={{ color: "rgba(0,0,0,0.5)" }}>
                      <b>MINUTES</b>
                    </p>
                  </div>
                  <div className="days">
                    <span style={{ fontFamily: "Arial", fontSize: 45 }}>
                      <b>00</b>
                    </span>
                    <p style={{ color: "rgba(0,0,0,0.5)" }}>
                      <b>SECONDS</b>
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Link href="" style={{color: "#000", marginRight: 5}}>View Details</Link>
                  <ArrowRightAltIcon />
                </div>
              </div>
            </div>
          </div>

          <img
            src={image1}
            style={{
              width: "100%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "600px",
            }}
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide style={{ position: "relative" }}>
          <div className="Events">
            <div>
              <span style={{fontFamily: "Arial", fontStyle: "italic"}}>Upcomming</span>
              <h3 style={{fontWeight: "bold", fontFamily: "Arial"}}>Events</h3>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div className="events-image">
                <img
                  src="https://preview.colorlib.com/theme/pato/images/event-01.jpg.webp"
                  alt=""
                  width="100%"
                />
              </div>
              <div className="events-content">
                <h4>Wines during specific nights</h4>
                <p className="events-content-p">
                  Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis
                  est. Sed fringilla, nunc sed imperdiet lacinia
                </p>
                <div className="times">
                  <div className="days">
                    <span style={{ fontFamily: "Arial", fontSize: 45 }}>
                      <b>00</b>
                    </span>
                    <p style={{ color: "rgba(0,0,0,0.5)" }}>
                      <b>DAYS</b>
                    </p>
                  </div>
                  <div className="days">
                    <span style={{ fontFamily: "Arial", fontSize: 45 }}>
                      <b>00</b>
                    </span>
                    <p style={{ color: "rgba(0,0,0,0.5)" }}>
                      <b>HOURS</b>
                    </p>
                  </div>
                  <div className="days">
                    <span style={{ fontFamily: "Arial", fontSize: 45 }}>
                      <b>00</b>
                    </span>
                    <p style={{ color: "rgba(0,0,0,0.5)" }}>
                      <b>MINUTES</b>
                    </p>
                  </div>
                  <div className="days">
                    <span style={{ fontFamily: "Arial", fontSize: 45 }}>
                      <b>00</b>
                    </span>
                    <p style={{ color: "rgba(0,0,0,0.5)" }}>
                      <b>SECONDS</b>
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Link href="" style={{color: "#000", marginRight: 5}}>View Details</Link>
                  <ArrowRightAltIcon />
                </div>
              </div>
            </div>
          </div>
          <img
            src={image2}
            style={{
              width: "100%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "600px",
            }}
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide style={{ position: "relative" }}>
          <div className="Events">
            <div>
              <span style={{fontFamily: "Arial", fontStyle: "italic"}}>Upcomming</span>
              <h3 style={{fontWeight: "bold", fontFamily: "Arial"}}>Events</h3>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <div className="events-image">
                <img
                  src="https://preview.colorlib.com/theme/pato/images/event-06.jpg.webp"
                  alt=""
                  width="100%"
                />
              </div>
              <div className="events-content">
                <h4>Wines during specific nights</h4>
                <p className="events-content-p">
                  Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis
                  est. Sed fringilla, nunc sed imperdiet lacinia
                </p>
                <div className="times">
                  <div className="days">
                    <span style={{ fontFamily: "Arial", fontSize: 45 }}>
                      <b>00</b>
                    </span>
                    <p style={{ color: "rgba(0,0,0,0.5)" }}>
                      <b>DAYS</b>
                    </p>
                  </div>
                  <div className="days">
                    <span style={{ fontFamily: "Arial", fontSize: 45 }}>
                      <b>00</b>
                    </span>
                    <p style={{ color: "rgba(0,0,0,0.5)" }}>
                      <b>HOURS</b>
                    </p>
                  </div>
                  <div className="days">
                    <span style={{ fontFamily: "Arial", fontSize: 45 }}>
                      <b>00</b>
                    </span>
                    <p style={{ color: "rgba(0,0,0,0.5)" }}>
                      <b>MINUTES</b>
                    </p>
                  </div>
                  <div className="days">
                    <span style={{ fontFamily: "Arial", fontSize: 45 }}>
                      <b>00</b>
                    </span>
                    <p style={{ color: "rgba(0,0,0,0.5)" }}>
                      <b>SECONDS</b>
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Link href="" style={{color: "#000", marginRight: 5}}>View Details</Link>
                  <ArrowRightAltIcon />
                </div>
              </div>
            </div>
          </div>
          <img
            src={image3}
            style={{
              width: "100%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "600px",
            }}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Events;
