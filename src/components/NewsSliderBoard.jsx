import React, { memo } from "react";
import News from "./News";
import helpers from "../helpers";

const NewsSliderBoard = memo(({ amount = 1, news }) => {
  const value = Math.floor(Math.random() * 10);

  return (
    <>
      {helpers.getNumbersTill(amount).map((num) => {
        return <News news={news[value]} key={num} />;
      })}
    </>
  );
});

export default NewsSliderBoard;
