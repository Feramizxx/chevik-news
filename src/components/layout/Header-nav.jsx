import React, { useState } from "react";
import Logo from './../Logo';
import NavbarSearchbtn from './NavbarSearchbtn'
import { NavLink } from "react-router-dom";
import useFetchCategories from "../../hooks/useFetchCategories";
import { useContext } from "react";
import { LanguageContext } from './../../contexts/LanguageContext';
import PageLoader from './../PageLoader';
import helpers from "../../helpers";

const HeaderNav = () => {
  const [menu, setMenu] = useState(false);
  const { language } = useContext(LanguageContext);
  const { categories, isCategoriesLoading, categoriesError } = useFetchCategories(language);
  if (isCategoriesLoading) return <PageLoader />

  const onLinkClick = () => {
    helpers.scrollTop();
  }

  const onMenuClick = () => {
    setMenu(!menu);
  }

  const onShadowClick = () => {
    setMenu(false);
  }

  return (
    <nav className="flex w-full justify-center items-center px-6 py-3 bg-primary-card lg:bg-primary-bg">
      <div className="w-full max-w-[1200px] flex items-center justify-evenly">
        <Logo />
        {menu && <div onClick={onShadowClick} className="fixed bg-black w-full h-screen bg-opacity-30 top-0 left-0 z-30" />}
        <div className={`
          fixed w-full bg-primary-card z-50 transition-all duration-400 p-6
          lg:static lg:flex lg:transition-none lg:bg-inherit justify-evenly lgmax-w-[900px]
        `}
          style={{ top: menu ? '0' : '-300%' }}
        >
          <NavLink to={'/'} className="navlink lg:p-0" onClick={onLinkClick}> Əsas xəbərlər </NavLink>
          {categories.map((category) => <NavLink onClick={onLinkClick} key={category.id} to={`/news/${category.slug}`} className="navlink lg:p-0">{category.name}</NavLink>)}
          {menu &&
            <svg
              onClick={onMenuClick} className="fill-white hover:cursor-pointer fixed right-3 top-3 m-3 z-50 lg:hidden" width="33" height="33" viewBox="0 0 33 33" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5 0.25C13.2861 0.25 10.1443 1.20305 7.47199 2.98862C4.79969 4.77419 2.71689 7.31209 1.48697 10.2814C0.257041 13.2507 -0.0647633 16.518 0.562247 19.6702C1.18926 22.8224 2.73692 25.7179 5.00952 27.9905C7.28213 30.2631 10.1776 31.8108 13.3298 32.4378C16.482 33.0648 19.7493 32.743 22.7186 31.513C25.6879 30.2831 28.2258 28.2003 30.0114 25.528C31.797 22.8557 32.75 19.7139 32.75 16.5C32.75 14.366 32.3297 12.2529 31.5131 10.2814C30.6964 8.30985 29.4994 6.51847 27.9905 5.00952C26.4815 3.50056 24.6902 2.3036 22.7186 1.48696C20.7471 0.670319 18.634 0.25 16.5 0.25ZM20.9038 18.5963C21.0561 18.7473 21.177 18.927 21.2595 19.1251C21.342 19.3231 21.3844 19.5355 21.3844 19.75C21.3844 19.9645 21.342 20.1769 21.2595 20.3749C21.177 20.573 21.0561 20.7527 20.9038 20.9038C20.7527 21.0561 20.573 21.177 20.3749 21.2594C20.1769 21.3419 19.9645 21.3844 19.75 21.3844C19.5355 21.3844 19.3231 21.3419 19.1251 21.2594C18.927 21.177 18.7473 21.0561 18.5963 20.9038L16.5 18.7913L14.4038 20.9038C14.2527 21.0561 14.073 21.177 13.8749 21.2594C13.6769 21.3419 13.4645 21.3844 13.25 21.3844C13.0355 21.3844 12.8231 21.3419 12.6251 21.2594C12.427 21.177 12.2473 21.0561 12.0963 20.9038C11.9439 20.7527 11.8231 20.573 11.7406 20.3749C11.6581 20.1769 11.6156 19.9645 11.6156 19.75C11.6156 19.5355 11.6581 19.3231 11.7406 19.1251C11.8231 18.927 11.9439 18.7473 12.0963 18.5963L14.2088 16.5L12.0963 14.4038C11.7903 14.0978 11.6184 13.6827 11.6184 13.25C11.6184 12.8173 11.7903 12.4022 12.0963 12.0963C12.4023 11.7903 12.8173 11.6184 13.25 11.6184C13.6827 11.6184 14.0978 11.7903 14.4038 12.0963L16.5 14.2088L18.5963 12.0963C18.9023 11.7903 19.3173 11.6184 19.75 11.6184C20.1827 11.6184 20.5978 11.7903 20.9038 12.0963C21.2098 12.4022 21.3817 12.8173 21.3817 13.25C21.3817 13.6827 21.2098 14.0978 20.9038 14.4038L18.7913 16.5L20.9038 18.5963Z" />
            </svg>
          }
          <NavLink to={'/rubrics'} className="navlink lg:p-0"> Rubrikalar </NavLink>
        </div >
        <svg onClick={onMenuClick} className="fill-white hover:cursor-pointer lg:hidden" width="48" height="32" viewBox="0 0 48 32"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M24 32H0V26.6667H24V32ZM48 18.6667H0V13.3333H48V18.6667ZM48 5.33333H24V0H48V5.33333Z" />
        </svg>

        <NavbarSearchbtn />
      </div>

    </nav >
  );
};


{/* <NavLink to={'/rubrics'} className="navlink lg:p-0">Təhsil</NavLink>
          <NavLink to={'/rubrics'} className="navlink lg:p-0">Siyasət</NavLink>
          <NavLink to={'/rubrics'} className="navlink lg:p-0">İqtisadiyyat</NavLink>
          <NavLink to={'/rubrics'} className="navlink lg:p-0">Cəmiyyət </NavLink>
          <NavLink to={'/rubrics'} className="navlink lg:p-0">İdman</NavLink>
          <NavLink to={'/rubrics'} className="navlink lg:p-0">Mədəniyyət</NavLink>
          <NavLink to={'/rubrics'} className="navlink lg:p-0">Dünya</NavLink>
          <NavLink to={"/rublicmain"} className="navlink lg:p-0">Rublikalar</NavLink> */}
export default HeaderNav;
