import React from "react";

function SmallText({ text }) {
  return (
    <div className="smallText  md:leading-9 mt-4 md:text-2xl text-md lg:text-3xl lg:max-w-[700px]  md:leading-7 max-w-[400px] ">
      <p className="text-white md:tracking-wider font-thin">{text}</p>
    </div>
  );
}

export default SmallText;
