import React from "react";
import NewsHero from "./NewsHero";
import MultipleSlider from "./MultipleSlider";
import img from "../../assets/img/reklam.png";
const reklam = <img src={img} alt="reklamImage" />;
import LayOut from "../../components/layout";
import { useParams } from "react-router";
import storageNews from "../../temporary-storage";
import { useState } from "react";
import helpers from "../../helpers";
import { useEffect } from "react";
export default function InlineNews() {
  const newArray = storageNews[0].concat(storageNews[1]);
  const { id } = useParams();

  // FIXME: transform this block of code into the hook useFetchProduct.js

  const [product, setProduct] = useState({});
  // TODO: MISSING isLoading state

  const getProduct = () => {
    const newProduct = newArray.find((item) => item.id === parseInt(id));
    setProduct(newProduct);
    helpers.scrollTop("smooth");
  };

  useEffect(() => {
    getProduct();
  }, []);
  // FIXME: transform this block of code into the hook useFetchProduct.js

  return (
    <LayOut>
      <div className="w-[80%] mr-auto ml-auto">
        <NewsHero product={product} reklam={reklam} />
        <MultipleSlider product={product} />
      </div>
    </LayOut>
  );
}
