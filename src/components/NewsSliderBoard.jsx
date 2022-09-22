import React, { memo } from "react";
import News from "./News";
import helpers from "../helpers";

const NewsSliderBoard = memo(({ amount = 1, news }) => {

  return (
    <>
      {helpers.getNumbersTill(amount).map((num) => {
        return <News news={news[num]} key={num} />;
      })}
    </>
  );
});

export default NewsSliderBoard;
