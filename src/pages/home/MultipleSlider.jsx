import React from "react";
import Slider from "react-slick";
import img2 from "../../assets/img/reklam.png";
import NewsBoard from "../../components/NewsBoard";
import News from "../../components/News";
import Option from "../../components/ui/Option";
import storageNews from "../../temporary-storage";
import NewsSliderBoard from "../../components/NewsSliderBoard";
import { memo } from "react";
import { Navigate } from "react-router-dom";
import helpers from "../../helpers";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const MultipleSlider = memo(({ product, reklambtm, amount = 6 }) => {
  const newStorage = storageNews[0].concat(storageNews[1]);
  newStorage.forEach((item) => item.views);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const { id } = useParams();
  const newStorageArr = newStorage.filter((item) => item.id != product.id);
  const navigate = useNavigate();
  const gotoNews = (e) => {
    console.log(e.target.value);
   window.location.replace(`/inlineNews/4`);
  };
  return (
    <>
      <div className="mt-48">
        <Option className="mb-4" clickable={false}>
          Son dəqiqə
        </Option>
        <div  className="mr-auto ml-auto  w-[80vw] ">
          <Slider className="mr-auto ml-auto" {...settings}>
            {helpers.getNumbersTill(amount).map(() => {
              return (
                <div onClick={gotoNews} className="px-0.5">
                  <NewsSliderBoard  news={newStorageArr} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="ml-3 hidden max-nav:block ml-28 mt-12 pt-6  mt-9">
        {reklambtm}
      </div>
    </>
  );
});

export default MultipleSlider;
