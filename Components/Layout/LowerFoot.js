import React from "react";
import up from "../../Assets/Icons/top.png";

function LowerFoot() {
  return (
    <div className="w-screen bg-white">
      <div className="up mt-3 w-full flex items-center justify-center py-4 flex-row">
        <p className="font-bold text-xl">GoTo Top</p>
        <a href="#top">
          <img src={up.src} alt="up arrow" className="ml-3 w-[30px] h-[30px]" />
        </a>
        <hr className="bg-Apple" />
      </div>
      {/* <hr className="bg-Apple" /> */}

      <div className="down mt-3 pb-6 px-6">
        <div className="nav-items w-full flex items-center justify-center">
          <a href="/" className="nav-item text-sm text-black hover:text-Apple">
            HOME
          </a>
          <a
            href="/about"
            className="nav-item text-sm  text-black ml-3 hover:text-Apple"
          >
            ABOUT
          </a>
          <a
            href="/products"
            className="nav-item  text-sm text-black ml-3 hover:text-Apple"
          >
            PRODUCTS
          </a>
          <a
            href="/contact"
            className="nav-item text-sm  text-black ml-3 hover:text-Apple"
          >
            CONTACT
          </a>
        </div>
      </div>
    </div>
  );
}

export default LowerFoot;
