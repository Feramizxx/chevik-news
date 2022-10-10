import React from "react";
import NavbarSearchbtn from "./NavbarSearchbtn";
import { NavLink } from "react-router-dom";

const NavbarItems = (props) => {
  return (
    <>
      <NavLink to={'/'} className="navlink lg:p-0"><span>Əsas</span><span className="ml-2">xəbərlər</span> </NavLink>
      <NavLink to={'/rubrics'} className="navlink lg:p-0">Təhsil</NavLink>
      <NavLink to={'/rubrics'} className="navlink lg:p-0">Siyasət</NavLink>
      <NavLink to={'/rubrics'} className="navlink lg:p-0">İqtisadiyyat</NavLink>
      <NavLink to={'/rubrics'} className="navlink lg:p-0">Cəmiyyət </NavLink>
      <NavLink to={'/rubrics'} className="navlink lg:p-0">İdman</NavLink>
      <NavLink to={'/rubrics'} className="navlink lg:p-0">Mədəniyyət</NavLink>
      <NavLink to={'/rubrics'} className="navlink lg:p-0">Dünya</NavLink>
      <NavLink to={"/rublicmain"}>
        <li className="mr-5 max-nav:py-2 max-nav:px-20">Rublikalar</li>
      </NavLink>
    </>
  );
};

export default NavbarItems;
