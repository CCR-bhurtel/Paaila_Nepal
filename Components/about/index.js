import React from "react";

import SmallText from "../common/SmallText";
import Surgery from "../../Assets/Misc/surgery.jpg";
import FadeAnimation from "../common/Fade";
function About() {
  return (
    <div className="min-w-screen   usm:items-center usm:justify-center flex flex-row bg-Leaf">
      <FadeAnimation>
        <div className="text-part lg:py-6 py-12 px-6 flex  md:text-left items-left justify-center flex-col ">
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
      </FadeAnimation>

      <div className="image-part hidden md:block md:min-h-100 md:w-[70vw] lg:w-[50vw] object-fit bg-White">
        <img className="md:w-100 md:min-h-[500px]" src={Surgery.src} alt="" />
      </div>
    </div>
  );
}

export default About;
