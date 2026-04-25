"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa"; 

const reviews = [
  { name: "John", text: "Amazing platform for shopping!" },
  { name: "Sarah", text: "Fast and easy checkout system." },
  { name: "Ali", text: "Great prices and UI!" },
  { name: "Emma", text: "Loved the smooth experience." },
  { name: "David", text: "Best deals I’ve found online!" },
  { name: "Sophia", text: "Super clean and modern design." },
  { name: "Michael", text: "Checkout process is very fast." },
  { name: "Ayesha", text: "Highly recommended platform!" },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 px-4">

      <h2 className="text-2xl font-bold text-center mb-10 text-[#47A7CE]">
        What Customers Say
      </h2>

      <div className="max-w-6xl mx-auto">

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: false,
          }}
          className="py-10"
        >

          {reviews.map((r, i) => (
            <SwiperSlide key={i} className="max-w-sm">
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition h-full flex flex-col justify-between">

                {/*  Rating  Icons */}
                <div className="flex gap-1 text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600">"{r.text}"</p>

                {/* User */}
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                    {r.name.charAt(0)}
                  </div>

                  <h4 className="font-semibold">{r.name}</h4>
                </div>

              </div>
            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
}