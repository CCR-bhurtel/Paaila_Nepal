import React from "react";
import ProductHero from "../Components/Hero/ProductHero";
import Product from "../Components/product/Product";
import Contact from "../Components/contact/index";
import Advertisement from "../Components/common/Advertisment";

function products() {
  return (
    <>
      <ProductHero />
      <Product title={"Our products"} length={8} />
      <Advertisement />
      <Contact title={"Get a quote !!"} titleid={2} />
    </>
  );
}

export default products;
