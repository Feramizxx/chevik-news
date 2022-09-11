import React from "react";
import Slider from "react-slick";
import img2 from "../../assets/img/reklam.png";
import NewsBoard from "../../components/NewsBoard";
import News from "../../components/News";
import Option from "../../components/ui/Option";
import storageNews from "../../temporary-storage";
import NewsSliderBoard from "../../components/NewsSliderBoard";

const MultipleSlider = (props) => {
  const newArray = storageNews[0].concat(storageNews[1]);
  console.log(storageNews);
  console.log(newArray);
  newArray.forEach((item) => item.views);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
   

  };

  console.log(storageNews[1])

  return (

    <>
    <div className="mt-48 w-[80%] mr-auto ml-auto">
      <Option className="mb-4" clickable={false}>Son dəqiqə</Option>
      <div className="mr-auto ml-auto  w-[80vw] ">
        <Slider  className="mr-auto ml-auto" {...settings}>
          <div>
            <NewsSliderBoard news={storageNews[0]} />
          </div>
          <div>
            <NewsSliderBoard news={storageNews[1]} />
          </div>
          <div>
            <NewsSliderBoard news={storageNews[0]} />
          </div>
          <div>
            <NewsSliderBoard news={storageNews[1]} />
          </div>
          <div>
            <NewsSliderBoard news={storageNews[1]} />
          </div>
        </Slider>
      </div>
      
    </div>
    <div className="ml-3 hidden max-nav:block ml-28 mt-12 pt-6  mt-9">
              {props.reklambtm}
            </div>
</>
  );
};

export default MultipleSlider;
