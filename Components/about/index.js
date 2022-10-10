import React from "react";

import SmallText from "../common/SmallText";
import Surgery from "../../Assets/Misc/surgery.png";
function About() {
  return (
    <div className="min-w-screen bg-Leaf  usm:items-center usm:justify-center flex flex-row">
      <div className="text-part lg:py-6 py-12 px-6 flex  md:text-left items-left justify-center flex-col">
        <div className="largetext md:text-left text-3xl md:text-5xl text-white">
          All <span className="text-Toxic">Surgical Equipments</span> at one
          place
        </div>
        <SmallText
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, sed mi sed tincidunt nisi ultrices. Nibh habitasse sed tincidunt amet tin"
          }
        />
        <a href="/about">
          <button className="mt-4 bg-Toxic text-white text-xl cursor-pointer rounded-md px-6 py-2 w-[200px] ">
            Know us more
          </button>
        </a>
      </div>
      <div className="image-part hidden md:block md:w-50">
        <img className="md:w-100 md:h-100 " src={Surgery.src} alt="" />
      </div>
    </div>
  );
}

export default About;
