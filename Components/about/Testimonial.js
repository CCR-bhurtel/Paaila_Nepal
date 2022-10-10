import React from "react";


function Testimonial({ review: { name, review, image } }) {
  return (
    <div className="mt-3 bg-Leaf flex items-center justify-center flex-col py-6 px-3 min-h-[400px]">
      <div
        className="image h-[90px] w-[90px] rounded-full"
        style={{
          backgroundImage: `url(/clients/${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="info  flex font-Open tracking-wide items-center flex-col justify-center mt-3 text-white">
        <div className="name text-Toxic mt-1 text-2xl font-Open">{name}</div>
        <p className="review text-center text-thin mt-1">{review}</p>
      </div>
    </div>
  );
}

export default Testimonial;
