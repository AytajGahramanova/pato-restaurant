import React from "react";
import Main from "../../../pages/client/Home/sections/Main";
import Discover from "../../../pages/client/Home/sections/Discover";
import OurStory from "./sections/OurStory";
import Products from "../../../pages/client/Home/sections/Products";
import Events from "../../../pages/client/Home/sections/Events";
import Rezervation from "../../../pages/client/Home/sections/Rezervation";
import Blogs from "../../../pages/client/Home/sections/Blogs";
import SignUp from "./sections/SignUp";


const Header = () => {
  return (
    <div>
      <Main />
      <OurStory />
      <Discover />
      <Products />
      <Events />
      <Rezervation />
      <Blogs />
      <SignUp />
    </div>
  );
};

export default Header;
