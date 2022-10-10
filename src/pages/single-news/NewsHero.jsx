import React from "react";
import { storageBaseURL } from "../../app/App";
import { ReactComponent as Views } from '../../assets/icons/views.svg';
import Advertisement from "../../components/Advertisement";

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

export const fixDate = (apiDate) => {
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
        <div>
          <div>
            <div className="flex justify-between w-full mb-6 text-xl">
              <p> {news.title} </p>
              <div className="flex items-center gap-3 text-sm">
                <p> {fixDate(news.created_at)} </p>
                <div className="flex items-center gap-1">
                  <Views />
                  <p> {news.views} </p>
                </div>
              </div>
            </div>
            <div className="sm:flex gap-[1vw]">
              <img className="object-cover object-center w-full mb-3 sm:mb-0" src={storageBaseURL + news.image} />
              {/* <Advertisement advertisement={advertisement} /> */}
            </div>
          </div>
          <div className=" mt-24">
            <div>
              <h2 className="w-full max-w-[1200px] my-20 mb-2 text-[20px]">{news.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: news.body }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsHero;
