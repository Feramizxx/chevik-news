import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import "../../assets/styles/animation.css";
import Navbar from "./Navbar";
import Navbarmobile from "./Navbar-mobile";
import { useNavigate } from "react-router";
import Logo from './../Logo';
const HeaderNav = () => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  return (
    <nav
      className=" 
     bg-primary-bg flex w-full justify-between max-nav:items-start items-center"
    >
      <div className="ml-12 mt-2 max-nav:hidden">
        <Logo />
      </div>

      <div className="relative  mr-[7%] max-nav:mr-0 mt-0">
        <div className="block max-nav:hidden">
          <Navbar />
        </div>
        <div className="hidden max-nav:block  max-nav:bg-primary-card">
          <Navbarmobile />
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
