import React from "react";
import LowerFoot from "./LowerFoot";
import facebook from "../../Assets/Icons/facebook.png";
import instagram from "../../Assets/Icons/instagram.png";
import twitter from "../../Assets/Icons/twitter.png";
import location from "../../Assets/Icons/location-white.png";
import phone from "../../Assets/Icons/phone-white.png";
import mail from "../../Assets/Icons/mail-white.png";

function Footer() {
  return (
    <div className="footer-bg px-6 py-12 bg-Leaf flex items-center justify-center ">
      <div className=" flex flex-wrap  items-center justify-between  md:justify-around lg:w-[1200px] ">
        <div className="follow text-white text-md lg:text-xl tracking-wide lg:tracking-wider">
          <p>Follow #PailaNepal</p>
          <div className="icons flex flex-row mt-2">
            <a href="https://www.facebook.com/">
              <img
                src={facebook.src}
                alt="facebook icon"
                className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] "
              />
            </a>

            <a href="https://www.instagram.com/" className="ml-3 lg:ml-4">
              <img
                src={instagram.src}
                alt="instagram icon"
                className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]"
              />
            </a>
            <a href="https://www.twitter.com/" className="ml-3 lg:ml-4">
              <img
                src={twitter.src}
                alt="twitter icon"
                className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]"
              />
            </a>
          </div>
        </div>

        <div className="newsletter text-white usm:ml-6 mt-6 md:mt-4">
          <p className="text-md font-Open tracking-wide text-md lg:text-xl ">
            Subscribe to our newsletter
          </p>
          <div className="input flex flex-col">
            <input
              type="text"
              className="bg-transparent text-xl text-White border border-Apple border-2 rounded-md px-4 py-4 focus:outline-none lg:w-[400px] mt-2"
              placeholder="Your Email"
            />
            <button className="bg-Toxic w-[100px] rounded-md tracking-wide py-4 mt-2">Subscribe</button>
          </div>
        </div>
        <div className="info text-white mt-6 flex items-start justify-start flex-col md:ml-6">
          <div className="location flex items-center justify-center flex-row flex-wrap">
            <img
              src={location.src}
              alt=""
              className="h-[30px] w-[20px] lg:h-[40px] lg:w-[30px]"
            />
            <p className="ml-2 lg:ml-4 lg:text-xl">
              Butwal-11, Kalikanagar, <br />
              Rupandehi, Nepal
            </p>
          </div>
          <div className="phone flex items-center justify-center flex-row flex-wrap mt-3">
            <img
              src={phone.src}
              alt=""
              className="h-[30px] w-[20px] lg:h-[40px] lg:w-[30px]"
            />
            <p className="ml-2  lg:ml-4 lg:text-xl">+977 2934924298</p>
          </div>
          <div className="mail flex items-center justify-center flex-row flex-wrap mt-3">
            <img
              src={mail.src}
              alt=""
              className="h-[20px] w-[20px] lg:h-[40px] lg:w-[40px]"
            />
            <p className="ml-2 lg:ml-4 lg:text-xl">paailanepal@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
