import React from "react";
import HeaderLanguage from "./HeaderLanguage";
import { ReactComponent as Telegram } from '../../assets/icons/telegram.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';

const HeaderBar = () => {
const date=new Date();
const hour =date.getHours()
const minute = String(date.getMinutes()).padStart(2, '0');
  return (
    <div className="bg-primary-card  h-[60px] flex items-center   justify-between">
      <div className=" ml-16 max-md:ml-[5px] pt-4 flex w-fit ">
        <div>
          <div className="flex  w-fit">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.0523 3.60639L4.66212 3.21461C4.27194 2.82283 3.64166 2.83288 3.26148 3.21461L3.25148 3.22466C2.8613 3.61644 2.8613 4.24931 3.25148 4.63105L3.64166 5.02283C4.03183 5.41461 4.65211 5.41461 5.04229 5.02283L5.0523 5.01278C5.44247 4.63105 5.44247 3.98813 5.0523 3.60639ZM2.01091 9.99543H0.99045C0.4402 9.99543 0 10.4374 0 10.99V11C0 11.5525 0.4402 11.9945 0.99045 11.9945H2.00091C2.56116 12.0046 3.00136 11.5626 3.00136 11.01V11C3.00136 10.4374 2.56116 9.99543 2.01091 9.99543ZM11.015 0H11.005C10.4447 0 10.0045 0.442009 10.0045 0.99452V1.9589C10.0045 2.51142 10.4447 2.95342 10.995 2.95342H11.005C11.5653 2.96347 12.0055 2.52146 12.0055 1.96895V0.99452C12.0055 0.442009 11.5653 0 11.015 0ZM18.7585 3.22466C18.3683 2.83288 17.7381 2.83288 17.3479 3.21461L16.9577 3.60639C16.5675 3.99817 16.5675 4.63105 16.9577 5.01278L16.9677 5.02283C17.3579 5.41461 17.9882 5.41461 18.3684 5.02283L18.7585 4.63105C19.1487 4.23927 19.1487 3.61644 18.7585 3.22466ZM16.9477 18.3936L17.3379 18.7854C17.7281 19.1772 18.3583 19.1772 18.7485 18.7854C19.1387 18.3936 19.1387 17.7607 18.7485 17.3689L18.3583 16.9772C17.9682 16.5854 17.3379 16.5954 16.9577 16.9772C16.5575 17.379 16.5575 18.0018 16.9477 18.3936ZM19.0086 10.99V11C19.0086 11.5525 19.4488 11.9945 19.9991 11.9945H21.0096C21.5598 11.9945 22 11.5525 22 11V10.99C22 10.4374 21.5598 9.99543 21.0096 9.99543H19.9991C19.4488 9.99543 19.0086 10.4374 19.0086 10.99ZM11.005 4.9726C7.6935 4.9726 5.00227 7.67489 5.00227 11C5.00227 14.3251 7.6935 17.0274 11.005 17.0274C14.3165 17.0274 17.0077 14.3251 17.0077 11C17.0077 7.67489 14.3165 4.9726 11.005 4.9726ZM10.995 22H11.005C11.5553 22 11.9955 21.558 11.9955 21.0055V20.0411C11.9955 19.4886 11.5553 19.0466 11.005 19.0466H10.995C10.4447 19.0466 10.0045 19.4886 10.0045 20.0411V21.0055C10.0045 21.558 10.4447 22 10.995 22ZM3.25148 18.7753C3.64166 19.1671 4.27194 19.1671 4.66212 18.7753L5.0523 18.3836C5.44247 17.9918 5.43247 17.3589 5.0523 16.9772L5.04229 16.9671C4.65211 16.5753 4.02183 16.5753 3.63165 16.9671L3.24147 17.3589C2.8613 17.7607 2.8613 18.3836 3.25148 18.7753Z"
                fill="#B5B5B5"
              />
            </svg>
            <span className="text-white ml-2">34</span>
          </div>
          <span className="text-white ">Baku</span>
        </div>
        <span className="text-white ml-3 mb-2 text-[270%] ">|</span>
        <span className="text-white ml-2 "> {hour +":"+minute}</span>
      </div>

      <div className="mr-[10%] mt-8 max-md:mr-[5px]">
        <ul className="flex text-white w-64  justify-between">
          <li>Əlavə</li>
          <li>
            <Telegram />
          </li>
          <li>
            <Instagram />
          </li>
          <li>
            <Facebook />
          </li>
          <select className="bg-primary-card" name="" id="">
            <HeaderLanguage />
          </select>
        </ul>
      </div>
    </div >
  );
};

export default HeaderBar;
