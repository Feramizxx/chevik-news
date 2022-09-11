import React,{useState} from "react";
import NavbarItems from "./Navbar-Items";
import NavbarSearchbtn from "./NavbarSearchbtn";

const Navbarmobile = () => {
  const [openMobileMenu,setOpenMobileMenu]=useState(false)
  const buttonHandle=()=>{
    setOpenMobileMenu(!openMobileMenu)
  }
  return (
    <ul className="flex max-nav:w-[100vw] max-nav:pb-4 relative max-nav:mt-1 items-start  max-nav:flex-col ">
         <svg
          onClick={buttonHandle}
          className="hidden max-nav:block "
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
        </svg>
   {openMobileMenu && <NavbarItems />}
      <li className="mr-5 max-nav:py-2 max-nav:mr-0 max-nav:px-24">
     
    </li>
    </ul>
  );
};

export default Navbarmobile;
