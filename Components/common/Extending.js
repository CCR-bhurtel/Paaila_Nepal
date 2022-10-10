import React from "react";
import SmallText from "../common/SmallText";

function Extending() {
  return (
    <div className="extending-bg mt-3 object-cover md:min-h-[500px] lg:min-h-[700px]   flex items-center justify-center flex-col py-12 px-6 ">
      <div className="container lg:max-w-[900px]">
        <h2 className="text-3xl text-Toxic md:text-5xl lg:text-7xl">
          We are Extending
        </h2>
        <SmallText
          text={
            "After a 5 years long service in butwal, we’ve finally decided to extend our service all over nepal."
          }
        />
        <a href="/contact">
          <button className="px-4 py-3 mt-3 lg:mt-[5rem] hover:bg-transparent hover:border hover:text-Toxic hover:border-2 hover:border-Apple text-white text-md bg-Apple rounded-md shadow-md">
            Ask for dealership
          </button>
        </a>
      </div>
    </div>
  );
}

export default Extending;
