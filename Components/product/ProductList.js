import React, { useEffect } from "react";
import { useState } from "react";
import products from "../../Data/products";
import ProductItem from "./ProductItem";

function ProductList({ productLength }) {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const newProductList = [];
    for (let i = 0; i < productLength; i++) {
      newProductList.push(products[i]);
    }
    setProductList(newProductList);
  }, [productLength]);
  return (
    <div className="products ">
      <div className="container flex flex-wrap p-8 flex-row">
        {productList.length &&
          productList.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        <a href="/products ">
          <p className="text-Apple text-xl font-Inter float-right m-2"> See more &gt;</p>
        </a>
      </div>
    </div>
  );
}

export default ProductList;
