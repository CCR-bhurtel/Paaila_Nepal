import React from "react";
import ProductList from "./ProductList";
import SectionTitle from "../common/SectionTitle";

function Product({ title, length = 6 }) {
  return (
    <section className="mt-[1rem]">
      <SectionTitle title={title} />
      <ProductList productLength={length} />
    </section>
  );
}

export default Product;
