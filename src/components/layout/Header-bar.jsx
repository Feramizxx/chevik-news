import React from "react";
import HeaderLanguage from "./HeaderLanguage";
import { ReactComponent as Telegram } from '../../assets/icons/telegram.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Sun } from '../../assets/icons/sun.svg';

const HeaderBar = () => {
  const date = new Date();
  const hour = date.getHours()
  const minute = String(date.getMinutes()).padStart(2, '0');

  // TODO: make time, weather dynamic and not from pc

  return (
    <div className="bg-primary-card  h-24 flex items-center   justify-between">
      <div className=" ml-16 max-md:ml-[5px] pt-4 flex w-fit ">
        <div>
          <div className="flex w-fit">
            <Sun />
            <span className="text-white ml-2">34</span>
          </div>
          <span className="text-white ">Baku</span>
        </div>
        <span className="text-white ml-3 text-[50px] ">|</span>
        <span className="text-white ml-2 text-[1.4rem]"> {hour + ":" + minute}</span>
      </div>

      <div className="mr-[10%] mt-8 max-md:mr-[5px]">
        <ul className="flex text-white w-64  justify-between">
          <li> Əlavə </li>
          <li> <Telegram className="clickable" /> </li>
          <li> <Instagram className="clickable" /> </li>
          <li> <Facebook className="clickable" /> </li>
          <select className="bg-primary-card" name="" id="">
            <HeaderLanguage />
          </select>
        </ul>
      </div>
    </div >
  );
};

export default HeaderBar;
