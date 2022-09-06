import React,{useState} from "react";
import logo from "../../assets/logo.png";

const HeaderNav = () => {
    const [isVisible, setIsVisible]=useState(false)
    const searchbuttonHandler=()=>{ 
        setIsVisible(!isVisible)
    }
  return (
    <nav className="flex justify-between items-center">
      <div className="ml-12 mt-2"><img src={logo}/></div>
      <div className="relative mr-[7%] ">
        <ul className="text-white mt-2 flex  items-center">
          <li className="mr-5">Əsas xəbərlər</li>
          <li className="mr-5">Təhsil</li>
          <li className="mr-5">Siyasət</li>
          <li className="mr-5">İqtisadiyyat</li>
          <li className="mr-5">Cəmiyyət </li>
          <li className="mr-5">İdman</li>
          <li className="mr-5">Mədəniyyət</li>
          <li className="mr-5">dunya</li>
          <li className="mr-5">Rublikalar</li>
          <li className="mr-5">
         <button onClick={searchbuttonHandler}><svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 14L10.9306 10.9252L14 14ZM12.6316 6.81579C12.6316 8.35823 12.0188 9.8375 10.9282 10.9282C9.8375 12.0188 8.35823 12.6316 6.81579 12.6316C5.27335 12.6316 3.79408 12.0188 2.70341 10.9282C1.61273 9.8375 1 8.35823 1 6.81579C1 5.27335 1.61273 3.79408 2.70341 2.70341C3.79408 1.61273 5.27335 1 6.81579 1C8.35823 1 9.8375 1.61273 10.9282 2.70341C12.0188 3.79408 12.6316 5.27335 12.6316 6.81579V6.81579Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg></button>  
          </li>
        </ul>
       {isVisible && <input className="0 absolute px-2 mt-2 right-8" type='text' placeholder="Search..."/>}
      </div> 
    </nav>
  );
};

export default HeaderNav;
