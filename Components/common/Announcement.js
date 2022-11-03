import React from "react";
import Surgeon from "../../Assets/Misc/surgeon.png";
import mic from "../../Assets/Misc/mic.png";
function Announcement() {
  return (
    <div className="announcement-bg h-[190px] usm:h-[250px] md:min-h-[500px] lg:min-h-[700px]  relative bg-white w-screen flex items-center justify-center mx-auto my-[3rem]">
      {/* <div className="w-screen hidden md:block md:min-h-[400px] lg:min-h-[600px]"></div> */}
      {/* <img
        className="h-[130px] absolute top-[2rem] left-[1rem] z-[0]"
        src={Surgeon.src}
        alt="Surgeon png"
      />
      <img
        className="h-[60px] absolute top-[1rem] right-[0.7rem] z-[0]"
        src={mic.src}
        alt="microphone announcement"
      /> */}

      {/* <div className="bg-Doctory py-6 px-4 rounded-md z-[10] relative ">
        <h2 className="text-xl text-white text-center">
          Order in bulk, get a huge discount.
        </h2>
      </div> */}
    </div>
  );
}

export default Announcement;
