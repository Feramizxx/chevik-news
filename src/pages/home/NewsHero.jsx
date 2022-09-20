import React from "react";
import img2 from "../../assets/img/reklam.png";
import img from "../../assets/img/President.png";
import logo from "../../assets/img/logo.png";
const NewsHero = (props) => {

  
  return (
    <>
      <div className="flex pt-32 flex-col w-[100%] mr-auto ml-auto ">
        <div>
          <h3 className="text-[16px] mb-12">Əsas xəbərlər</h3>
        </div>

        <div className="  mr-auto ml-auto">
          <div className="flex justify-between ">
            <div className="flex flex-col ">
              <div className="flex mb-3 justify-between">
                <p>STAT OF THE DAY: Lorem Ipsum...</p>
                <div className="flex">
                  <span className="mr-8">{props.product.date}</span>
                  <span>
                    <span className="flex">
                      <svg
                        className="mt-1 mr-1"
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.7411 5.06375C15.0863 5.5066 15.0863 6.10446 14.7411 6.5466C13.6539 7.93875 11.0455 10.8052 8.00011 10.8052C4.95475 10.8052 2.34631 7.93875 1.2591 6.5466C1.09116 6.33456 1 6.07369 1 5.80518C1 5.53666 1.09116 5.2758 1.2591 5.06375C2.34631 3.6716 4.95475 0.805176 8.00011 0.805176C11.0455 0.805176 13.6539 3.6716 14.7411 5.06375Z"
                          fill="#F3F3F3"
                          stroke="#F3F3F3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      {props.product.views}
                    </span>
                  </span>
                </div>
              </div>
              <img className="object-cover  w-full h-full " src={`..${props.product.image}`} />
            </div>
            <div className="ml-3 max-nav:hidden  mt-9">{props.reklam}</div>
          </div>

          <div className=" mt-24">
            <p>
              <h2 className="mb-2 text-[20px]">{props.product.title}</h2>
              {props.product.text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsHero;
