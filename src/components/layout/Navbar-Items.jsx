import React from "react";
import NavbarSearchbtn from "./NavbarSearchbtn";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { NavLink, Link } from "react-router-dom";
const NavbarItems = (props) => {
  const navigate = useNavigate();
  const { category } = useParams();

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
      <li className="mr-5 mb-4 w-full  max-nav:py-2 max-nav:mr-0 max-nav:px-20">
        <NavbarSearchbtn />
      </li>
    </>
  );
};

export default NavbarItems;
