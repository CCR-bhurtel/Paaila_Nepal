import React from "react";
import ProductList from "./ProductList";

function Product() {
  return (
    <section className="mt-[1rem]">
      <div className="sectiontitle flex items-center justify-center flex-col">
        <span className="text-xl text-Apple font-bold">Our Products</span>
        <div className="w-[4rem] h-[.2rem] bg-Apple"></div>
      </div>
      <ProductList productLength={5} />
    </section>
  );
}

export default Product;
