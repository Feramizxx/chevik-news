import React from "react";
import rublikimg from "../../../assets/img/rublikimg.png";
import LayOut from '../../../components/layout';

const RublikMain = () => {
  return (
    <LayOut>
      <div>
        <div className="mt-16 ml-4 flex justigy-between">
          <span className="mr-4">
            Əsas xəbərlər
          </span>
          <span>/</span>
          <span className="ml-4">
            Rublikalar
          </span>
        </div>
        <ul>
          <li className="mb-3 relative w-full pt-16">
            <img className=" w-[100vw]" src={rublikimg} />
            <p className="absolute bottom-[35%] text-[4rem] max-lg:text-[6vw] left-[4%] max-">STAT OF THE DAY: Lorem Ipsum...</p>
            <button className="bottom-7 text-black px-7 py-1 font-bold bg-[#fff] right-8 absolute max-sm:text-[2vw] max-sm:bottom-4 max-sm:right-4">Ətraflı</button>
          </li>
          <li className="mb-3 relative w-full ">
            <img className=" w-[100vw]" src={rublikimg} />
            <p className="absolute bottom-[35%] text-[4rem] max-lg:text-[6vw] left-[4%] max-">STAT OF THE DAY: Lorem Ipsum...</p>
            <button className="bottom-7 text-black px-7 py-1 font-bold bg-[#fff] right-8 absolute max-sm:text-[2vw] max-sm:bottom-4 max-sm:right-4">Ətraflı</button>
          </li>
          <li className="mb-3 relative w-full ">
            <img className=" w-[100vw]" src={rublikimg} />
            <p className="absolute bottom-[35%] text-[4rem] max-lg:text-[6vw] left-[4%] max-">STAT OF THE DAY: Lorem Ipsum...</p>
            <button className="bottom-7 text-black px-7 py-1 font-bold bg-[#fff] right-8 absolute max-sm:text-[2vw] max-sm:bottom-4 max-sm:right-4">Ətraflı</button>
          </li>
          <li className="mb-3 relative w-full">
            <img className=" w-[100vw]" src={rublikimg} />
            <p className="absolute bottom-[35%] text-[4rem] max-lg:text-[6vw] left-[4%] max-">STAT OF THE DAY: Lorem Ipsum...</p>
            <button className="bottom-7 text-black px-7 py-1 font-bold bg-[#fff] right-8 absolute max-sm:text-[2vw] max-sm:bottom-4 max-sm:right-4">Ətraflı</button>
          </li>
          <li className="mb-3 relative w-full ">
            <img className=" w-[100vw]" src={rublikimg} />
            <p className="absolute bottom-[35%] text-[4rem] max-lg:text-[6vw] left-[4%] max-">STAT OF THE DAY: Lorem Ipsum...</p>
            <button className="bottom-7 text-black px-7 py-1 font-bold bg-[#fff] right-8 absolute max-sm:text-[2vw] max-sm:bottom-4 max-sm:right-4">Ətraflı</button>
          </li>
        </ul>
      </div>
    </LayOut>
  );
};

export default RublikMain;
