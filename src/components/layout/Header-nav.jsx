import React, { useState } from "react";
import "../../assets/styles/animation.css";
import Navbar from "./Navbar";
import Navbarmobile from "./Navbar-mobile";
import Logo from './../Logo';

const HeaderNav = () => {
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
