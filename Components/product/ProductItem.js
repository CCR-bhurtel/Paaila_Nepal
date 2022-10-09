import React from "react";
import Image from "next/image";
import bulldog from "../../Assets/Products/bulldog_clamps.png";

function ProductItem({ product: { id, name, image } }) {
  console.log(image);
  return (
    image && (
      <div className="productItem mt-3 relative group cursor-pointer">
        <div className="cover absolute bg-Leaf opacity-[.8] inset-0 flex  items-center p-2 hidden group-hover:flex">
          <div>
            <h2 className="text-white font-medium font-Inter text-xl">
              {name}
            </h2>
            <div className="w-[4rem] h-[.3rem] bg-white"></div>
          </div>
        </div>

        <div
          className="w-[250px] h-[250px] rounded-b-lg bg-contain bg-center object-fit"
          style={{ backgroundImage: `url(/productimages/${image})` }}
        ></div>
      </div>
    )
  );
}

export default ProductItem;
