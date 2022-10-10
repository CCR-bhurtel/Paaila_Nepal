import React from "react";
import ContactForm from "./ContactForm";

function Contact({ title, titleid }) {
  return (
    <div className="contactbg bg-Teal  flex flex-col items-center justify-center px-3 py-4 mt-3">
      <h2 className="text-white text-2xl tracking-wider font-Inter">{title}</h2>

      <div className="w-full flex items-center lg:items-start flex-col container ">
        <ContactForm titleid={titleid} />
      </div>
    </div>
  );
}

export default Contact;
