"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full">

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-[500px]"
      >

        {/* Slide 1 */}
        <SwiperSlide>
          <div className="h-[500px] flex flex-col items-center justify-center bg-blue-50 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Welcome to NexCart 
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              Shop smart, fast and easy with our modern eCommerce platform.
            </p>

            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              <Link href="/all-products">Start Shopping</Link>
            
            </button>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="h-[500px] flex flex-col items-center justify-center bg-pink-50 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Best Deals Every Day 
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              Get amazing discounts on trending products.
            </p>

            <button className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">
              <Link href="/all-products">Explore Deals</Link>
            </button>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="h-[500px] flex flex-col items-center justify-center bg-green-50 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Fast & Secure Shopping
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              Experience smooth checkout and secure payments.
            </p>

            <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              <Link href="/all-products">Get Started</Link>
            </button>
          </div>
        </SwiperSlide>

      </Swiper>

    </section>
  );
}