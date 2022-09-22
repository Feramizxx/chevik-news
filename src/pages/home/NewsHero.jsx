import React from "react";
import { apiBaseURL, storageBaseURL } from "../../app/App";
import { ReactComponent as Views } from '../../assets/icons/views.svg';

const numToMonth = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aug',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec'
}

const fixDate = (apiDate) => {
  const date = apiDate.split('-');
  const year = date[0];
  const month = date[1];
  const day = date[2].split(' ')[0];
  return `${numToMonth[month]} ${day},${year}`;
}

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
              <div className="flex mb-3 justify-between items-center">
                <p className="text-lg mr-8">STAT OF THE DAY: Lorem Ipsum...</p>
                <p className="mr-8 text-sm">{fixDate(news.created_at)}</p>
                <div className="flex items-center">
                  <Views />
                  <p className="ml-2 text-sm"> {news.views} </p>
                </div>
              </div>
              <img className="object-cover  w-full h-full " src={storageBaseURL + news.image} />
            </div>
            <div className="ml-3 max-nav:hidden  mt-9">{advertisement}</div>
          </div>

          <div className=" mt-24">
            <div>
              <h2 className="mb-2 text-[20px]">{news.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: news.body }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsHero;
