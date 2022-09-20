import React from "react";
import rublikimg from "../../../assets/img/rublikimg.png";
import LayOut from '../../../components/layout';
import { useNavigate } from "react-router";
import helpers from "../../../helpers";

const RublikMain = () => {
  const navigate=useNavigate()
  const goToRubliInlineHandler=()=>{ 
    navigate('/rublicInline')
    helpers.scrollTop()
  }
  const goToHomeHandler =()=>{
    navigate('/')
  }
  return (
    <LayOut>
      <div className="pt-32">
        <div className="pt-24 ml-4 flex justigy-between">
          <span onClick={goToHomeHandler}   className="cursor-pointer mr-4">
            Əsas xəbərlər
          </span>
          <span>/</span>
          <span className="ml-4 cursor-pointer text-[#94B7EC]">
            Rublikalar
          </span>
        </div>
        <ul>
          <li className="mb-3 relative w-full pt-16">
            <img className=" w-[100vw]" src={rublikimg} />
            <p className="absolute bottom-[35%] text-[4rem] max-lg:text-[6vw] left-[4%] max-">STAT OF THE DAY: Lorem Ipsum...</p>
            <button onClick={goToRubliInlineHandler} className="bottom-7 text-black px-7 py-1 font-bold bg-[#fff] right-8 absolute max-sm:text-[2vw] max-sm:bottom-4 max-sm:right-4">Ətraflı</button>
          </li>
          <li className="mb-3 relative w-full ">
            <img className=" w-[100vw]" src={rublikimg} />
            <p className="absolute bottom-[35%] text-[4rem] max-lg:text-[6vw] left-[4%] max-">STAT OF THE DAY: Lorem Ipsum...</p>
            <button onClick={goToRubliInlineHandler} className="bottom-7 text-black px-7 py-1 font-bold bg-[#fff] right-8 absolute max-sm:text-[2vw] max-sm:bottom-4 max-sm:right-4">Ətraflı</button>
          </li>
          <li className="mb-3 relative w-full ">
            <img className=" w-[100vw]" src={rublikimg} />
            <p className="absolute bottom-[35%] text-[4rem] max-lg:text-[6vw] left-[4%] max-">STAT OF THE DAY: Lorem Ipsum...</p>
            <button onClick={goToRubliInlineHandler} className="bottom-7 text-black px-7 py-1 font-bold bg-[#fff] right-8 absolute max-sm:text-[2vw] max-sm:bottom-4 max-sm:right-4">Ətraflı</button>
          </li>
          <li className="mb-3 relative w-full">
            <img className=" w-[100vw]" src={rublikimg} />
            <p className="absolute bottom-[35%] text-[4rem] max-lg:text-[6vw] left-[4%] max-">STAT OF THE DAY: Lorem Ipsum...</p>
            <button onClick={goToRubliInlineHandler} className="bottom-7 text-black px-7 py-1 font-bold bg-[#fff] right-8 absolute max-sm:text-[2vw] max-sm:bottom-4 max-sm:right-4">Ətraflı</button>
          </li>
          <li className="mb-3 relative w-full ">
            <img className=" w-[100vw]" src={rublikimg} />
            <p className="absolute bottom-[35%] text-[4rem] max-lg:text-[6vw] left-[4%] max-">STAT OF THE DAY: Lorem Ipsum...</p>
            <button onClick={goToRubliInlineHandler} className="bottom-7 text-black px-7 py-1 font-bold bg-[#fff] right-8 absolute max-sm:text-[2vw] max-sm:bottom-4 max-sm:right-4">Ətraflı</button>
          </li>
        </ul>
      </div>
    </LayOut>
  );
};

export default RublikMain;
