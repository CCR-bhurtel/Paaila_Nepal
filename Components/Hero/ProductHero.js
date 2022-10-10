import React from "react";
import SmallText from "../common/SmallText";

function ProductHero() {
  return (
    <div
      id="top"
      className="hero_products h-[75vh] md:h-[500px] lg:min-h-[670px] w-screen object-cover flex items-start pb-4 px-6 py-[3rem] md:py-[4rem] lg:pl-[12rem]"
    >
      <div className="container flex items-start justify-top flex-col">
        <div className="largeText font-Inter text-2xl font-semibold mb-[-1rem] md:text-4xl lg:text-7xl text-Toxic ">
          From needles to clamps
        </div>
        <div className="smallText  md:leading-9 mt-4  md:text-xl text-md lg:text-2xl lg:max-w-[650px]  md:leading-7 max-w-[400px] lg:mt-6 ">
          <p className="text-white md:tracking-wider font-thin">
            We sell every thing needed for a surgery. Give us a chance for your
            service.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse amet maecenas integer pulvinar cras semper aliquet at
            augue.
          </p>
        </div>
        <a href="/contact" className=" mt-2 ">
          <div className="bg-Apple w-[120px] lg:py-3 lg:px-4 lg:mt-6 rounded-md shadow-md text-white py-2 px-3 text-md mt-2 lg:text-Xl hover:border hover:border-2 hover:border-Apple hover:text-Apple hover:bg-transparent">
            Get a quote
            <p></p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ProductHero;
