import React from "react";
import SmallText from "../common/SmallText";
import FadeAnimation from "./Fade";

function Extending() {
  return (
    <div className="extending-bg relative object-cover md:min-h-[500px] lg:min-h-[700px] min-w-screen   flex items-center justify-center flex-col py-12 px-6 ">
      <div className="backdrop absolute inset-0 bg-black/10 z-[1] block md:hidden"></div>
      <FadeAnimation>
        <div className="container lg:max-w-[1400px] z-[2]">
          <h2 className="text-3xl text-Toxic md:text-5xl lg:text-7xl">
            We are Extending
          </h2>
          <div className="smallText  md:leading-9 mt-4 md:text-2xl text-md lg:text-2xl lg:max-w-[550px]  md:leading-7 max-w-[400px] ">
            <p className="text-teal md:tracking-wider font-thin ">
              After a 5 years long service in butwal, we’ve finally decided to
              extend our service all over nepal.
            </p>
          </div>
          <p></p>
          <a href="/contact">
            <button className="px-4 py-3 mt-3 lg:mt-[3rem] hover:bg-transparent hover:border hover:text-Toxic hover:border-2 hover:border-Apple text-white text-md bg-Apple rounded-md shadow-md">
              Ask for dealership
            </button>
          </a>
        </div>
      </FadeAnimation>
    </div>
  );
}

export default Extending;
