

"use client";

import { FaShippingFast, FaLock, FaTags } from "react-icons/fa";

const features = [
  {
    title: "Fast Delivery",
    desc: "Get products quickly at your doorstep",
    icon: <FaShippingFast />,
  },
  {
    title: "Secure Payment",
    desc: "100% safe and encrypted transactions",
    icon: <FaLock />,
  },
  {
    title: "Best Prices",
    desc: "Affordable deals every day",
    icon: <FaTags />,
  },
];

export default function Features() {
  return (
    <section className="py-8 px-4 bg-gradient-to-b from-white to-[#47A7CE] mt-16">

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#47A7CE]">
          Why Choose NexCart?
        </h2>
        <p className="text-gray-500 mt-2">
          Experience the best online shopping platform
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {features.map((f, i) => (
          <div
            key={i}
            className="group p-6 rounded-2xl bg-white/70 backdrop-blur-lg border hover:shadow-2xl transition duration-300 cursor-pointer hover:-translate-y-2"
          >
            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-[#47A7CE] text-2xl mb-4 group-hover:bg-[#47A7CE] group-hover:text-white transition">
              {f.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#47A7CE] transition">
              {f.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 mt-2">
              {f.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}