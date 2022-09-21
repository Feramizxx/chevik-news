import React from "react";
import HeaderLanguage from "./HeaderLanguage";
import { ReactComponent as Telegram } from '../../assets/icons/telegram.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Sun } from '../../assets/icons/sun.svg';
import useTimer from "../../hooks/useTimer";
import useWeather from '../../hooks/useWeather';
import { AxiosError } from 'axios';
import { useState } from "react";
import ComponentsLoader from "../ComponentLoader";

const HeaderBar = () => {
  const { hours, minutes, isTimerLoading } = useTimer();
  const { weather, weatherError, isWeatherLoading } = useWeather();
  const [errorMessage, setErrorMessage] = useState('');

  if (isWeatherLoading || isTimerLoading) return <ComponentsLoader />

  if (weatherError && weatherError instanceof AxiosError) {
    if (weatherError.status === 404) {
      setErrorMessage('Weather could not loaded');
    }
  }

  return (
    <div className="bg-primary-card  h-24 flex items-center   justify-between">
      <div className=" ml-16 max-md:ml-[5px] pt-4 flex w-fit ">
        <div>
          <div className="flex w-fit">
            <Sun />
            <span className="text-white ml-2"> {weather !== -404 ? Math.floor(weather) : errorMessage} </span>
          </div>
          <span className="text-white ">Baku</span>
        </div>
        <span className="text-white ml-3 text-[50px] ">|</span>
        <span className="text-white ml-2 text-[1.4rem]"> {hours + ":" + minutes}</span>
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