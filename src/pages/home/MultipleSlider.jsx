import React from "react";
import Slider from "react-slick";
import Option from "../../components/ui/Option";
import storageNews from "../../temporary-storage";
import NewsSliderBoard from "../../components/NewsSliderBoard";
import { memo } from "react";
import helpers from "../../helpers";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import News from "../../components/News";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
}; // TODO: hardcoded settings there is no need them to be in components (do not render it every time)

const responsive = [
  {
    breakpoint: 3000,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 640,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]

const newStorage = storageNews[0].concat(storageNews[1]); // FIXME: it is hardcoded storage remove it from component 


const MultipleSlider = memo(({ product, reklambtm, amount = 6 }) => {
  newStorage.forEach((item) => item.views);
  const newStorageArr = newStorage.filter((item) => item.id != product.id);

  return (
    <>
      <div className="mt-48">
        <Option className="mb-4" clickable={false}>
          Son dəqiqə
        </Option>
        <div className="mr-auto ml-auto  w-[80vw] ">
          <Slider responsive={responsive} className="mr-auto ml-auto" {...settings}>
            {helpers.getNumbersTill(amount).map((num) => {
              return (
                <div className="p-1">
                  <News key={num} news={newStorageArr[num]} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="hidden max-nav:block ml-28 pt-6 mt-9">
        {reklambtm}
      </div>
    </>
  );
});

export default MultipleSlider;
