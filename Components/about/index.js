import React from "react";

import SmallText from "../common/SmallText";
import Surgery from "../../Assets/Misc/surgery.png";
function About() {
  return (
    <div className="min-w-screen bg-Leaf flex flex-row">
      <div className="text-part py-12 px-6 flex items-center md:items-center justify-center flex-col">
        <div className="largetext text-3xl text-white">
          All <span className="text-Toxic">Surgical Equipments</span> at one
          place
        </div>
        <SmallText
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, sed mi sed tincidunt nisi ultrices. Nibh habitasse sed tincidunt amet tin"
          }
        />
        <button className="mt-4 bg-Toxic text-white text-xl cursor-pointer rounded-md px-6 py-2 ">
          Know us more
        </button>
      </div>
      <div className="image-part hidden md:block md:w-50">
        <img className="md:w-100 md:h-100 " src={Surgery.src} alt="" />
      </div>
    </div>
  );
}

export default About;
