import React, { useState } from "react";
import NavbarItems from "./Navbar-Items";
import NavbarSearchbtn from "./NavbarSearchbtn";

import Hamburger from "hamburger-react";
import Logo from "../Logo";

const Navbarmobile = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const buttonHandle = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <ul className="flex max-nav:w-full  max-nav:pb-0 relative max-nav:mt-1 items-start  max-nav:flex-col justify-between ">
      <Logo />
      <div className="absolute left-[58%] top-[20px] ">
        <NavbarSearchbtn />
      </div>

      <div
        onClick={buttonHandle}
        className="hidden absolute right-0 max-nav:block"
      >

      </div>

      {openMobileMenu && <NavbarItems />}
    </ul >
  );
};

export default Navbarmobile;
