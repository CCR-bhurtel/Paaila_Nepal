import React from "react";

import SmallText from "../common/SmallText";
import Surgery from "../../Assets/Misc/surgery.jpg";
import FadeAnimation from "../common/Fade";
function About() {
  return (
    <div className="min-w-screen  usm:items-center usm:justify-center flex flex-col md:flex-row bg-White bg-Casal">
      <div className="image-part w-100 md:block  md:w-[70vw] lg:w-[50vw] object-fit bg-White">
        <img className="md:w-100 md:max-h-[600px] object-fit" src={Surgery.src} alt="" />
      </div>

      <div className="text-part lg:py-6 py-12 px-6 flex md:text-left items-left justify-center flex-col md:items-center">
        <FadeAnimation>
          <div className="largetext md:text-center text-3xl md:text-5xl text-white">
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
        </FadeAnimation>
      </div>
    </div>
  );
}

export default About;
