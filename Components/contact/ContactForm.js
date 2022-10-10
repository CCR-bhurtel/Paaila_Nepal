import React from "react";
import SmallText from "../common/SmallText";

function ContactForm({ titleid }) {
  return (
    <div className="flex items-center justify-center w-full lg:w-[40vw] bg-Apple px-3 md:px-6 mt-3 py-4 flex-col">
      <div className="formtitle flex flex-row items-center justify-center">
        <div className="outercircle rounded-full bg-Nickel w-[20px] h-[20px] border border-white border-1 flex items-center justify-center ">
          <div className="innercircle rounded-full bg-white w-[10px] h-[10px]"></div>
        </div>
        <p className="font-Inter text-md md:text-xl text-white ml-2">
          {titleid == 1 ? "Say Hi" : "Get a quote "}
        </p>
      </div>

      <form className="w-full mt-3" autoComplete="none">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full px-2 py-3 bg-transparent text-white text-md md:text-xl border-b border-gray  appearence-none focus:outline-none focus:border-white placeholder-gray-300 focus:border-b-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full mt-2 px-2 py-3 border-b border-gray bg-transparent text-white text-md md:text-xl appearence-none focus:outline-none focus:border-white placeholder-gray-300 focus:border-b-2"
        />
        {titleid == 2 && (
          <input
            type="text"
            name="product"
            placeholder="Product"
            className="w-full mt-2 px-2 py-3 border-b border-gray bg-transparent text-white text-md md:text-xl appearence-none focus:outline-none focus:border-white placeholder-gray-300 focus:border-b-2"
          />
        )}

        <textarea
          name="message"
          id="message"
          placeholder="Message"
          className="w-full mt-12 px-2 py-3 bg-transparent text-white text-md md:text-xl border border-gray border-1 appearence-none focus:outline-none placeholder-gray-300 focus:border-2"
          rows="7"
        ></textarea>
        <button className="rounded-xl bg-white text-Apple text-xl px-6 py-3 mt-2">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
