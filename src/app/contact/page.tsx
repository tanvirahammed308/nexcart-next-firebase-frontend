"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUser,
} from "react-icons/fa";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "We will get back to you soon ",
        timer: 1500,
        showConfirmButton: false,
      });

      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e6f7fb] to-[#f9fcff] px-4 py-16">

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Contact <span className="text-[#46A9C9]">NexCart</span>
          </h1>
          <p className="text-gray-600 mt-3">
            We’d love to hear from you. Send us a message 
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/*  Contact Info Card */}
          <div className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl space-y-6 border">

            <h2 className="text-2xl font-semibold text-gray-800">
              Get in Touch
            </h2>

            <div className="flex items-center gap-4 hover:translate-x-1 transition">
              <FaMapMarkerAlt className="text-[#46A9C9] text-xl" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-gray-600">Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="flex items-center gap-4 hover:translate-x-1 transition">
              <FaEnvelope className="text-[#46A9C9] text-xl" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">support@nexcart.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 hover:translate-x-1 transition">
              <FaPhone className="text-[#46A9C9] text-xl" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-600">+880 1234-567890</p>
              </div>
            </div>
          </div>

          {/*  Form Card */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-xl space-y-5 border"
          >
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
              Send Message
            </h2>

            {/* Name */}
            <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-[#46A9C9]">
              <FaUser className="text-gray-400" />
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-3 outline-none"
              />
            </div>

            {/* Email */}
            <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-[#46A9C9]">
              <FaEnvelope className="text-gray-400" />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-3 outline-none"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#46A9C9]"
            />

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#46A9C9] text-white py-3 rounded-lg hover:bg-[#3690ac] transition transform hover:scale-[1.02]"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}