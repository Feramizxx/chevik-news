import React, { useState } from "react";
import NavbarItems from "./Navbar-Items";
import NavbarSearchbtn from "./NavbarSearchbtn";
import logo from "../../assets/img/logo.png";
import Hamburger from "hamburger-react";
const Navbarmobile = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const buttonHandle = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <ul className="flex   relative max-nav:w-[100vw] max-nav:w-full  max-nav:pb-0 relative max-nav:mt-1 items-start  max-nav:flex-col justify-between ">
      <img alt="logos" src={logo} />
      <div className="absolute left-[58%] top-[20px] ">
        <NavbarSearchbtn />
      </div>
      {/* <svg
        onClick={buttonHandle}
        className="hidden absolute right-0 max-nav:block "
        width="72px"
        height="72px"
        viewBox="0 0 72 72"
        id="emoji"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="color" />
        <g id="hair" />
        <g id="skin" />
        <g id="skin-shadow" />
        <g id="line">
          <line
            x1="16"
            x2="56"
            y1="26"
            y2="26"
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <line
            x1="16"
            x2="56"
            y1="36"
            y2="36"
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <line
            x1="16"
            x2="56"
            y1="46"
            y2="46"
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
        </g>
      </svg> */}
      <div
        onClick={buttonHandle}
        className="hidden absolute right-0 max-nav:block"
      >
        <Hamburger />
      </div>

      {openMobileMenu && <NavbarItems />}
    </ul>
  );
};

export default Navbarmobile;
