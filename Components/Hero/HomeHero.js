import React from "react";
import SmallText from "../common/SmallText";

function HomeHero() {
  return (
    <div className="hero_home h-[50vh] md:h-[500px] lg:min-h-[670px] min-w-screen object-cover flex items-start justify-center px-6 py-[3rem] md:py-[4rem]">
      <div className="container">
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
      </div>
    </div>
  );
}

export default HomeHero;
