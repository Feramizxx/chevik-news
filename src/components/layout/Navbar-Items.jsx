import React from "react";
import NavbarSearchbtn from "./NavbarSearchbtn";
const NavbarItems = () => {
  return (
    <>
      <li className="mr-5  max-nav:py-2 max-nav:px-24 ">Əsas xəbərlər</li>
      <li className="mr-5 max-nav:py-2 max-nav:px-24 ">Təhsil</li>
      <li className="mr-5 max-nav:py-2 max-nav:px-24 ">Siyasət</li>
      <li className="mr-5 max-nav:py-2 max-nav:px-24 ">İqtisadiyyat</li>
      <li className="mr-5 max-nav:py-2 max-nav:px-24">Cəmiyyət </li>
      <li className="mr-5 max-nav:py-2 max-nav:px-24">İdman</li>
      <li className="mr-5 max-nav:py-2 max-nav:px-24">Mədəniyyət</li>
      <li className="mr-5 max-nav:py-2 max-nav:px-24">dunya</li>
      <li className="mr-5 max-nav:py-2 max-nav:px-24">Rublikalar</li>
      <li className="mr-5 mb-4 w-full  max-nav:py-2 max-nav:mr-0 max-nav:px-24">
        <NavbarSearchbtn />
      </li>
    </>
  );
};

export default NavbarItems;
