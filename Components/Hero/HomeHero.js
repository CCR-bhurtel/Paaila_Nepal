import React from "react";
import SmallText from "../common/SmallText";
import FadeAnimation from "../common/Fade";

function HomeHero() {
  return (
    <div
      id="top"
      className="hero_home h-[60vh] md:h-[500px] lg:min-h-[670px] w-screen object-cover flex items-start justify-center px-6 py-[3rem] md:py-[4rem]"
    >
      <div className="container">
        <FadeAnimation>
          <div className="largeText font-Inter text-4xl md:text-6xl lg:text-8xl text-white ">
            We sell{" "}
            <span className="text-Toxic">
              Surgical <br /> Items
            </span>
          </div>
          <SmallText
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, sed mi sed tincidunt nisi ultrices. Nibh habitasse sed tincidunt amet tin"
            }
          />
          <a href="/products/#quote" className=" mt-2 ">
            <div className="bg-Apple w-[120px] lg:py-3 lg:px-4 lg:mt-6 rounded-md shadow-md text-white py-2 px-3 text-md mt-2 lg:text-Xl hover:border hover:border-2 hover:border-Apple hover:text-white hover:bg-transparent">
              Get a quote
              <p></p>
            </div>
          </a>
        </FadeAnimation>
      </div>
    </div>
  );
}

export default HomeHero;
