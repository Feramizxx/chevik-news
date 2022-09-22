import React, { useState } from "react";
import "../../assets/styles/animation.css";
import Navbar from "./Navbar";
import Logo from './../Logo';
import NavbarSearchbtn from './NavbarSearchbtn'
import Hamburger from "hamburger-react";

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <nav className="flex w-full justify-center items-center p-3 bg-primary-card lg:bg-primary-bg">
      <div className="w-full max-w-[1400px] flex items-center justify-between">
        <Logo />
        <NavbarSearchbtn />
        <div>
          <div className="lg:hidden">
            <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
          </div>
          {isMenuOpen && <Navbar />}
        </div>
      </div>
      {/* <div className="relative max-nav:w-full  mr-[7%] max-nav:mr-0 mt-0">
        <div className="block max-nav:hidden">
          <Navbar />
        </div>
        <div className="hidden flex relative  max-nav:block max-nav:w-full  max-nav:bg-primary-card">
          <div>
            <Navbarmobile />
          </div>
        </div>
      </div> */}
    </nav>
  );
};

export default HeaderNav;
