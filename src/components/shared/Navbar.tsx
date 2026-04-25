"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/context/authContext";
import { usePathname } from "next/navigation";
import Swal from "sweetalert2";

// Icons
import { FaUserCircle } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";

import Logo from "../logo/Logo";

export default function Navbar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // close dropdown outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => pathname === path;

  const navLinkClass = (path: string) =>
    `transition font-medium ${
      isActive(path)
        ? "text-[#46A9C9] md:border-b-2 border-[#46A9C9]"
        : "text-gray-700 hover:text-[#46A9C9]"
    }`;

  const handleLogout = async () => {
    await logout();

    Swal.fire({
      icon: "success",
      title: "Logged out!",
      position: "top-end",
      timer: 1200,
      showConfirmButton: false,
    });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">

          <Link className={navLinkClass("/")} href="/">Home</Link>
          <Link className={navLinkClass("/all-products")} href="/all-products">Products</Link>
          <Link className={navLinkClass("/about")} href="/about">About</Link>
          <Link className={navLinkClass("/contact")} href="/contact">Contact</Link>

          {/* AUTH */}
          {!user ? (
            <Link href="/login" className=" font-medium">
              Login
            </Link>
          ) : (
            <div className="relative" ref={dropdownRef}>

              {/* User Button */}
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="border border-[#46A9C9]  px-3 py-1.5 rounded-lg hover:bg-gray-100 hover:text-[#46A9C9] "
              >
               
                <span className=" font-medium  ">
                  {user.displayName || user.email?.split("@")[0]}
                </span>
              </button>

              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-4 w-56 bg-white border border-[#46A9C9] shadow-lg rounded-xl overflow-hidden">

                  <div className="px-3 py-2 text-xs text-center text-gray-500 border-b">
                    Signed in as
                    <p className="text-gray-700 font-medium truncate">
                      {user.email}
                    </p>
                  </div>

                  <Link
                    href="/products/add"
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100"
                  >
                    <MdDashboard /> Add Product
                  </Link>

                  <Link
                    href="/products/manage"
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100"
                  >
                    <MdDashboard /> Manage Products
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 w-full text-left px-3 py-2 text-red-500 hover:bg-red-50"
                  >
                    <AiOutlineLogout /> Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3  flex flex-col">

          <Link className={navLinkClass("/")} href="/">Home</Link>
          <Link className={navLinkClass("/products")} href="/products">Products</Link>
          <Link className={navLinkClass("/about")} href="/about">About</Link>
          <Link className={navLinkClass("/contact")} href="/contact">Contact</Link>

          {!user ? (
            <Link href="/login" className="flex items-center gap-2">
              <FaUserCircle /> Login
            </Link>
          ) : (
            <>
              <p className="text-sm text-gray-600">
                {user.displayName || user.email}
              </p>

              <Link href="/products/add" className="flex items-center gap-2">
                <MdDashboard /> Add Product
              </Link>

              <Link href="/products/manage" className="flex items-center gap-2">
                <MdDashboard /> Manage Products
              </Link>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-500"
              >
                <AiOutlineLogout /> Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}