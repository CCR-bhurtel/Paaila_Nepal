import React, { useEffect, useState } from "react";
import UpperNav from "./UpperNav";
import HR from "../common/HR";
import Logo from "../../Assets/Logo/logo.png";

import Hamburger from "../../Assets/Icons/hamburger.png";

function Navbar() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const body = document.querySelector("body");

    if (!active) {
      body.style.overflow = "scroll";
    } else {
      body.style.overflow = "hidden";
    }
  }, [active]);

  return (
    <div className="overflow-hidden font-Inter">
      <UpperNav />
      <HR />
      <div className=" flex justify-center items-center">
        <nav className="p-6 flex justify-between items-center flex-row  container">
          <div className="logo ">
            <a href="/" className="cursor-pointer">
              <img
                src={Logo.src}
                className="max-w-[150px] md:max-w-[200px]"
                alt="paaila nepal logo"
              />
            </a>
          </div>
          <div
            className="hamburger cursor-pointer md:hidden "
            onClick={() => {
              setActive(true);
            }}
          >
            <img
              src={Hamburger.src}
              className="max-w-[30px]"
              alt="Hamburger icon"
            />
          </div>
          <div
            className={` ${
              active && "active"
            } navitems z-10 max-w-screen h-screen overflow-hidden flex flex-col items-center justify-center absolute inset-0 offset-0 bg-Apple text-center md:bg-transparent  md:flex-row md:min-h-max md:relative md:items-center`}
          >
            <p
              onClick={() => {
                setActive(false);
              }}
              className="text-3xl cursor-pointer font-bold text-white absolute top-4 right-4 hover:text-Army md:hidden "
            >
              X
            </p>
            <div className="navitem">
              <a href="/" className="cursor-pointer">
                <p className="text-white text-md font-medium hover:text-Army md:text-black md:font-medium md:hover:text-Apple">
                  HOME
                </p>
              </a>
            </div>
            <div className="navitem mt-4 md:mt-0 md:ml-[2rem]">
              <a href="/about" className="cursor-pointer">
                <p className="text-white text-md hover:text-Army font-medium hover:text-Army md:text-black md:font-medium md:hover:text-Apple">
                  ABOUT
                </p>
              </a>
            </div>
            <div className="navitem mt-4 md:mt-0 md:ml-[2rem]">
              <a href="/products" className="cursor-pointer">
                <p className="text-white text-md hover:text-Army font-medium hover:text-Army md:text-black md:font-medium md:hover:text-Apple">
                  PRODUCTS
                </p>
              </a>
            </div>
            <div className="navitem mt-4 md:mt-0 md:ml-[2rem]">
              <a href="/contact" className="cursor-pointer">
                <div className="bg-Army px-6 py-2 hover:border hover:border-Army hover:border-2 hover:bg-Apple  group rounded-md md:bg-Apple md:hover:bg-white md:hover:border-Apple md:hover">
                  <p className="text-white text-md hover:text-Army font-medium group-hover:text-Army md:group-hover:text-Apple">
                    CONTACT
                  </p>
                </div>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
