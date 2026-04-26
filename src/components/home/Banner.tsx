"use client";

import Link from "next/link";

export default function Banner() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-[#47A7CE] to-[#5cc6f0]">

      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-xl">

        <div className="grid md:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div className="p-10 text-white space-y-5">

            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              Get the Best Deals <br /> on Your Favorite Products
            </h2>

            <p className="text-white/90">
              Discover amazing discounts and exclusive offers. 
              Shop smarter with NexCart and enjoy a seamless experience.
            </p>

            <div className="flex gap-4 flex-wrap">

              <Link
                href="/all-products"
                className="bg-white text-[#47A7CE] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Shop Now
              </Link>

              <Link
                href="/about"
                className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#47A7CE] transition"
              >
                Learn More
              </Link>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:block">
            <img
              src="/image/banner.jpg"
              alt="banner"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>

    </section>
  );
}