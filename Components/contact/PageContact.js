import React from "react";
import location from "../../Assets/Icons/location-white.png";
import phone from "../../Assets/Icons/phone-white.png";
import mail from "../../Assets/Icons/mail-white.png";
import FadeAnimation from "../common/Fade";

function PageContact() {
  return (
    <div
      id="#top"
      className="bg-Army flex items-center justify-center py-12 px-6"
    >
      <div className="container">
        <div className="title">
          <div className="bigtitle text-white font-medium font-Open tracking-wide text-center md:text-2xl">
            CONTACT US
          </div>
          <hr className="h-[2px] mt-2" />
          <div className="slogan mt-2 text-white font-light  text-sm text-center tracking-wider md:text-xl">
            We would love to help you out.
          </div>
        </div>
        <FadeAnimation>
          <div className="body flex flex-col md:flex-row justify-center items-center mt-[3rem] w-full">
            <form
              action=""
              className="flex items-center justify-center flex-col w-[300px] md:w-[350px] lg:w-[500px]"
            >
              <input
                className="w-full py-2 px-3 font-Open text-gray focus:outline-none focus:border-2 focus:border-Apple mt-2 lg:py-3 lg:text-xl"
                type="text"
                name="name"
                placeholder="Your Name"
              />
              <input
                className="w-full lg:py-3 lg:text-xl py-2 px-3 font-Open text-gray focus:outline-none focus:border-2 focus:border-Apple mt-2"
                type="email"
                name="email"
                placeholder="Your Email"
              />
              <input
                className="w-full lg:py-3 lg:text-xl py-2 px-3 font-Open text-gray focus:outline-none focus:border-2 focus:border-Apple mt-2"
                type="tel"
                name="phone"
                placeholder="Phone(optional)"
              />
              <textarea
                placeholder="Message"
                className="focus:outline-none focus:border-2 focus:border-Apple mt-2 py-2 px-3 w-full lg:py-3 lg:text-xl"
                name="message"
                id=""
                cols="30"
                rows="6"
              ></textarea>
              <div className="w-full flex justify-start items-start">
                <button className="px-12 py-3 mt-3  hover:bg-transparent hover:border hover:text-Toxic hover:border-2 hover:border-Apple text-white text-md bg-Apple rounded-md shadow-md">
                  Send
                </button>
              </div>
            </form>
            <div
              className="info-container
            hidden md:block
        "
            >
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
                  <p className="ml-2 lg:ml-4 lg:text-xl">
                    paailanepal@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeAnimation>
      </div>
    </div>
  );
}

export default PageContact;
