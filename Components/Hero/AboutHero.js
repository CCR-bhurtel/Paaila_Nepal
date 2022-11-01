import React from "react";
import SmallText from "../common/SmallText";
import FadeAnimation from "../common/Fade";

function HomeHero() {
  return (
    <div
      id="top"
      className="hero_about min-h-[400px] md:min-h-[500px] flex items-center justify-center py-6 px-2 lg:min-h-[600px]"
    >
      <FadeAnimation>
        <div className="container bg-black/30 px-2 py-6 md:py-8 md:px-8 lg:max-w-[1000px]">
          <h2 className="about-title text-3xl md:text-4xl text-Toxic text-center lg:text-6xl">
            Who are we?
          </h2>
          <p className="font-Open text-md text-center text-white p-2 md:text-xl lg:p-4 lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            amet maecenas integer pulvinar cras semper aliquet at augue. Rutrum
            duis lorem felis ut rutrum vitae. Condimentum non nunommodo faucibus
            pellentesque quam mattis tristique nullam nunc vestibulum.
          </p>
        </div>
      </FadeAnimation>
    </div>
  );
}

export default HomeHero;
