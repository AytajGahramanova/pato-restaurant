import React from "react";
import "../../../components/client/Footer/style.css";
import "../../../assets/base.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content-wrapper">
          <div className="footer-content">
            <div className="contact">
              <h3>CONTACT US</h3>
              <div className="components">
                <LocationOnOutlinedIcon
                  style={{ color: "rgba(255, 255, 255, .3", fontSize: 20 }}
                />
                <span>8th floor, 379 Hudson St, New York, NY 10018</span>
              </div>
              <div className="components">
                <LocalPhoneOutlinedIcon
                  style={{ color: "rgba(255, 255, 255, .3", fontSize: 20 }}
                />
                <span>(+1) 96 716 6879</span>
              </div>
              <div className="components">
                <MailOutlineOutlinedIcon
                  style={{ color: "rgba(255, 255, 255, .3", fontSize: 20 }}
                />
                <span> contact@site.com</span>
              </div>
            </div>
            <div className="opening-times">
              <h3>OPENING TIMES</h3>
              <div className="components-times">
                <span>09:30 AM – 11:00 PM</span>
                <span>Every Day</span>
              </div>
            </div>
          </div>
          <div className="footer-content-twitter">
            <h3>LATEST TWITTER</h3>
            <div className="twitter-link">
              <TwitterIcon
                style={{ color: "rgba(255, 255, 255, .3", fontSize: 20 }}
              />
              <p style={{ color: "red", marginLeft: 5 }}>@colorlib</p>
            </div>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.3",
                maxWidth: 380,
                fontSize: "14px",
                marginTop: 7,
                marginBottom: 7,
              }}
            >
              Activello is a good option. It has a slider built into that
              displays the featured image in the slider.
            </p>
            <Link to="https://buff.ly/2zaSfAQ" style={{ color: "red" }}>
              https://buff.ly/2zaSfAQ
            </Link>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.2",
                fontSize: 13,
                marginTop: 30,
              }}
            >
              21 Dec 2017
            </p>

            <div className="twitter-link">
              <TwitterIcon
                style={{ color: "rgba(255, 255, 255, .3", fontSize: 20 }}
              />
              <p style={{ color: "red", marginLeft: 5 }}>@colorlib</p>
            </div>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.3",
                maxWidth: 380,
                fontSize: "14px",
                marginTop: 7,
                marginBottom: 7,
              }}
            >
              Activello is a good option. It has a slider built into that
              displays the featured image in the slider.
            </p>
            <Link to="https://buff.ly/2zaSfAQ" style={{ color: "red" }}>
              https://buff.ly/2zaSfAQ
            </Link>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.2",
                fontSize: 13,
                marginTop: 30,
              }}
            >
              21 Dec 2017
            </p>
          </div>
          <div className="footer-gallery-wrapper">
            <h3 style={{ color: "white" }}>GALLERY</h3>
            <div className="footer-gallery">
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-01.jpg"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-02.jpg"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-03.jpg"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-04.jpg"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-05.jpg"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-06.jpg"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-07.jpg"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-08.jpg"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-09.jpg"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-10.jpg"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-11.jpg"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-12.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
