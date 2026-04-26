"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Logo from "../logo/Logo";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/*  Brand Section */}
        <div>
          <Logo/>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            A modern e-commerce platform built for speed, simplicity and
            smooth shopping experience.
          </p>

          {/* Social */}
          <div className="flex gap-4 mt-5 text-lg">
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-blue-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-gray-700 transition"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-sky-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-pink-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/*  Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link className="hover:text-white transition" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-white transition" href="/all-products">
                Products
              </Link>
            </li>
            <li>
              <Link className="hover:text-white transition" href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-white transition" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact / Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Get in Touch
          </h3>

          <p className="text-sm text-gray-400">
            Email: support@nexcart.com
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Phone: +880 1XXX-XXXXXX
          </p>

          <div className="mt-5 text-sm text-gray-500">
            Fast delivery • Secure payment • Best prices
          </div>
        </div>
      </div>

      {/*  Bottom Bar */}
      <div className="border-t border-white/10 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-medium">NexCart</span>. All rights
        reserved.
      </div>
    </footer>
  );
}