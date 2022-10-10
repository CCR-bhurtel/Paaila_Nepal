import React from "react";
import Testimonials from "../Components/about/Testimonials";
import AboutHero from "../Components/Hero/AboutHero";
import Extending from "../Components/common/Extending";

function about() {
  return (
    <div>
      <AboutHero />
      <Testimonials />
      <Extending />
    </div>
  );
}

export default about;
