import React from "react";
import Image from "next/image";
import bulldog from "../../Assets/Products/bulldog_clamps.png";

function ProductItem({ product: { id, name, image } }) {
  console.log(image);
  return (
    image && (
      <div className="productItem mt-3 md:mr-2 lg:mt-4 relative group cursor-pointer w-[300px] h-[300px]  relative">
        <div className="cover absolute bg-Casal opacity-[.8] inset-0 flex  items-center p-2 hidden group-hover:flex z-10">
          <div>
            <h2 className="text-white font-medium font-Inter text-xl">
              {name}
            </h2>
            <div className="w-[4rem] h-[.3rem] bg-white"></div>
          </div>
        </div>

        <div
          className="w-full h-full absolute inset-0 rounded-b-lg bg-contain bg-center object-fit"
          style={{
            backgroundImage: `url(/productimages/${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    )
  );
}

export default ProductItem;
