"use client";

import Image from "next/image";
import aboutImg from "@/../public/image/about.jpg";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Image Section */}
        <div className="w-full">
          <div className="relative w-full h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={aboutImg}
              alt="About NexCart"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#47A7CE]">
            About NexCart
          </h1>

          <p className="mt-4 text-gray-600 leading-relaxed">
            NexCart is a modern e-commerce platform designed to make online
            shopping fast, simple, and secure. We focus on providing users with
            a smooth experience, from browsing products to secure checkout.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Our mission is to connect buyers and sellers in one powerful
            platform with real-time product management, secure authentication,
            and a clean user experience.
          </p>

          {/* Features */}
          <div className="mt-6 space-y-3">
            <p className="flex items-center gap-2 text-gray-700">
               Fast & Modern UI
            </p>
            <p className="flex items-center gap-2 text-gray-700">
               Secure Firebase Authentication
            </p>
            <p className="flex items-center gap-2 text-gray-700">
               Real-time Product Management
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}