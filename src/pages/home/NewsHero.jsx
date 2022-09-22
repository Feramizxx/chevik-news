import React from "react";
import { ReactComponent as Views } from '../../assets/icons/views.svg';

const NewsHero = ({ news, advertisement }) => {
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
                  <span className="mr-8">{news.created_at}</span>
                  <span>
                    <span className="flex items-center">
                      <Views />
                      <p className="ml-2"> {news.views} </p>
                    </span>
                  </span>
                </div>
              </div>
              <img className="object-cover  w-full h-full " src={`..${news.image}`} />
            </div>
            <div className="ml-3 max-nav:hidden  mt-9">{advertisement}</div>
          </div>

          <div className=" mt-24">
            <p>
              <h2 className="mb-2 text-[20px]">{news.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: news.body }} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsHero;
