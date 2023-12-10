import React, { useState, useEffect } from "react";
import Logo from "../../../assets/logo.png.webp";
import "../../../assets/base.css";
import "../../../components/client/Header/style.css";
import { NavLink, Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { Drawer } from "antd";

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    let scrollButton = document.querySelector(".page-scroll-button");

    const handleScroll = () => {
      if (window.scrollY > 300) {
        scrollButton.classList.remove("d-none");
      } else {
        scrollButton.classList.add("d-none");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <button onClick={scrollToTop} class="page-scroll-button d-none">
        <KeyboardArrowUpIcon />
      </button>
      <Drawer placement="right" onClose={onClose} open={open}>
        <div className="antd-link">
          <Link to="/">HOME</Link>
          <Link to="/menu">MENU</Link>
          <Link to="/rezervation">REZERVATION</Link>
          <Link to="/gallery">GALLERY</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/blog">BLOG</Link>
          <Link to="/contact">CONTACT</Link>
          <button className="antd-button">REZERVATION</button>

          <div className="header-gallery">
            <p>GALLERY</p>
            <div className="header-gallery-images">
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-01.jpg.webp"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-02.jpg.webp"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-03.jpg.webp"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-05.jpg.webp"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-06.jpg.webp"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/pato/images/photo-gallery-07.jpg.webp"
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
            </div>
          </div>
        </div>
      </Drawer>

      <div className="header">
        <div className="container">
          <div className="wrapper">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <div className="links">
              <NavLink
                className={(navData) => (navData.isActive ? "active" : "")}
                to="/"
              >
                HOME
              </NavLink>
              <NavLink
                className={(navData) => (navData.isActive ? "active" : "")}
                to="/menu"
              >
                MENU
              </NavLink>
              <NavLink
                className={(navData) => (navData.isActive ? "active" : "")}
                to="/rezervation"
              >
                REZERVATION
              </NavLink>
              <NavLink
                className={(navData) => (navData.isActive ? "active" : "")}
                to="/gallery"
              >
                GALLERY
              </NavLink>
              <NavLink
                className={(navData) => (navData.isActive ? "active" : "")}
                to="/about"
              >
                ABOUT
              </NavLink>
              <NavLink
                className={(navData) => (navData.isActive ? "active" : "")}
                to="/blog"
              >
                BLOG
              </NavLink>
              <NavLink
                className={(navData) => (navData.isActive ? "active" : "")}
                to="/contact"
              >
                CONTACT
              </NavLink>
            </div>
            <div className="icons">
              <FacebookIcon className="icon" />
              <TwitterIcon className="icon" />
              <MenuSharpIcon className="icon" onClick={showDrawer} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
