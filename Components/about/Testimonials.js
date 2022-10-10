import React from "react";
import reviews from "../../Data/reviews";
import SectionTitle from "../common/SectionTitle";
import Testimonial from "./Testimonial";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";

function Testimonials() {
  return (
    <div className="py-6">
      <SectionTitle title={"Client Testimonials"} />
      <div className="testimonials py-6 px-3">
        <Swiper
          spaceBetween={10}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 3.5,
            },
            1024: {
              slidesPerView: 4.4,
            },
          }}
        >
          {reviews.map((review) => {
            return (
              <SwiperSlide key={review.id}>
                <Testimonial review={review} key={review.id} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex flex-row items-end justify-end">
          <p className="text-Apple text-md">Swipe for more -&gt;</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
