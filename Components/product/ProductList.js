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
    <div className="products w-screen">
      <div
        className="
      w-full flex flex-wrap md:p-3 flex-row items-center justify-center"
      >
        {productList.length &&
          productList.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
      {productLength < 8 && (
        <a href="/products">
          <div className="bg-Apple flex justify-center px-3 py-2 mb-4 ml-2 rounded-md w-[200px]">
            <p className="text-xl text-white font-Inter m-2"> See more &gt;</p>
          </div>
        </a>
      )}
    </div>
  );
}

export default ProductList;
