import React from "react";
import { ReactComponent as Views } from '../../assets/icons/views.svg';

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
                    <span className="flex items-center">
                      <Views />
                      <p className="ml-2"> {props.product.views} </p>
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
