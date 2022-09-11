// import React from "react";
// import { Slide } from "react-slideshow-image";

// const slideImages = [
//   {
//     url: require('../../assets/img/President.png'),
//     content: `Dövlət başçısı: "İonik-Adriatik boru kəməri ilə Azərbaycan qazı üç Balkan ölkəsinə nəql ediləcək"`,
//   },
//   {
//     url: require('../../assets/img/President.png'),
//     content: `Dövlət başçısı: "İonik-Adriatik boru kəməri ilə Azərbaycan qazı üç Balkan ölkəsinə nəql ediləcək"`,
//   },
//   {
//     url: require('../../assets/img/President.png'),
//     content: `Dövlət başçısı: "İonik-Adriatik boru kəməri ilə Azərbaycan qazı üç Balkan ölkəsinə nəql ediləcək"`,
//   },
// ];
// const HeroSlider = () => {
//   return (
//     <div className="flex justify-around  mt-8 px-4">
//       <div className="relative max-xl:w-full hero-slider w-[65%]  ">
//         <Slide duration={500} arrows={false} autoplay={false} indicators={true}>
//           {slideImages.map((slideImage, index) => (
//             <div className="each-slide  h-[70vh]" key={index}>
//               <div
//                 className="h-[80vh]  relative bg-no-repeat w-[100%]  bg-cover"
//                 style={{ backgroundImage: `url(${slideImage.url})` }}
//               >
//                 <p className="absolute bottom-20 px-8 text-[24px] text-white">
//                   {slideImage.content}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </Slide>
//       </div>
//       {/* <div className="max-xl:hidden">
//         <img className=" h-[70vh] w-[100% ]" src={require('../../assets/img/reklam.png')} />
//       </div> */}
//     </div>
//   );
// };

// export default HeroSlider;















import React from "react";
import Slider from "react-slick";
import img2 from "../../assets/img/reklam.png";
import NewsBoard from "../../components/NewsBoard";
import News from "../../components/News";
import Option from "../../components/ui/Option";
import storageNews from "../../temporary-storage";
import NewsSliderBoard from "../../components/NewsSliderBoard";

const HeroSlider = (props) => {
  const newArray = storageNews[0].concat(storageNews[1]);
  console.log(storageNews);
  console.log(newArray);
  newArray.forEach((item) => item.views);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  console.log(storageNews[1])

  return (

    <>
    <div className="mt-8 w-[100%]">
      <Option className="mb-4" clickable={false}>Son dəqiqə</Option>
      <div className="mr-auto ml-auto  w-[80vw] ">
        <Slider  className="mr-auto ml-auto" {...settings}>
          <div className="w-full">
            <NewsSliderBoard news={storageNews[0]} />
          </div>
          <div>
            <NewsSliderBoard news={storageNews[1]} />
          </div>
          <div>
            <NewsSliderBoard news={storageNews[0]} />
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

export default HeroSlider;
