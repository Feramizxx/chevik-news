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
      <NavLink to={'/'}         className="mr-5 flex  max-nav:py-2  max-nav:px-[20px] "><span>Əsas</span><span className="ml-2">xəbərlər</span> </NavLink>
      <NavLink to={'/rubrics'}  className="mr-5 max-nav:py-2 max-nav:px-[20px] ">Təhsil</NavLink>
      <NavLink to={'/rubrics'}  className="mr-5 max-nav:py-2 max-nav:px-[20px] ">Siyasət</NavLink>
      <NavLink to={'/rubrics'}  className="mr-5 max-nav:py-2 max-nav:px-[20px] ">İqtisadiyyat</NavLink>
      <NavLink to={'/rubrics'}  className="mr-5 max-nav:py-2 max-nav:px-[20px]">Cəmiyyət </NavLink>
      <NavLink to={'/rubrics'}  className="mr-5 max-nav:py-2 max-nav:px-[20px]">İdman</NavLink>
      <NavLink to={'/rubrics'}  className="mr-5 max-nav:py-2 max-nav:px-[20px]">Mədəniyyət</NavLink>
      <NavLink to={'/rubrics'}  className="mr-5 max-nav:py-2 max-nav:px-[20px]">Dünya</NavLink>
      <NavLink  to={"/rublicmain"}>
        <li className="mr-5 max-nav:py-2 max-nav:p-[20px]">Rublikalar</li>
      </NavLink>
      <li className="mr-5 mb-4 w-full max-nav:hidden  max-nav:py-2 max-nav:mr-0 max-nav:px-20">
        <NavbarSearchbtn />
      </li>
    </>
  );
};

export default NavbarItems;
