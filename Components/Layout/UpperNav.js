import React from "react";
import inbox from "../../Assets/Icons/Mail outline.png";
import phone from "../../Assets/Icons/phone.png";
import location from "../../Assets/Icons/location.png";

function UpperNav() {
  return (
    <div
      className="p-4 flex flex-col justify-center md:justify-between flex-wrap  width-screen md:flex-row"
      style={{
        alignItems: "center",
      }}
    >
      <div className="flex flex-row items-center justify-center">
        <div className="email flex justify-center items-center">
          <img
            src={inbox.src}
            alt="mail outline"
            className="h-[17px] md:h-[30px]"
          />
          <p className="text-[12px] md:text-[16px] font-semibold ml-[4px] md:ml-10px] mt-[-1px]">
            paailanepal@gmail.com
          </p>
        </div>
        <div className="phone flex justify-center ml-4 md:ml-2rem items-center">
          <img
            src={phone.src}
            alt="phone outline"
            className="h-[17px]  md:h-[30px]"
          />
          <p className="text-[12px] md:text-[16px] font-semibold ml-[4px] md:ml-[10px] mt-[-1px]">
            +977 292734928
          </p>
        </div>
      </div>

      <div className="md:ml-[2rem]">
        <div className="address flex justify-center mt-4 items-center">
          <img
            src={location.src}
            alt="location outline"
            className="h-[25px] md:h-[30px]"
          />
          <p className="text-[12px] md:text-[16px] ml-[8px] md:ml-[10px] mt-[-1px] font-semibold">
            Butwal-11, Kalikanagar, <br className="md:display-none" />{" "}
            Rupandehi, Nepal
          </p>
        </div>
      </div>
    </div>
  );
}

export default UpperNav;
