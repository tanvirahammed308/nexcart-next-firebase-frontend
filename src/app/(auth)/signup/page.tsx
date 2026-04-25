"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import Swal from "sweetalert2";

import { FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SignupPage() {
  const { signup, googleSignIn } = useAuth();
  const router = useRouter();

  //  ADD NAME FIELD
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //  Signup
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      
      await signup(name, email, password);

      Swal.fire({
        icon: "success",
        title: "Account Created!",
        text: "Welcome to NexCart ",
        position: "top-end",
        timer: 1500,
        showConfirmButton: false,
      });

      router.push("/");
    } catch (err: any) {
      setError("Signup failed. Try again!");

      Swal.fire({
        icon: "error",
        title: "Signup Failed",
          text: "Please check your inputs",
        position: "top-end",
        timer: 1500,
        showConfirmButton: false,
      });
    } finally {
      setLoading(false);
    }
  };

  //  Google
  const handleGoogle = async () => {
    try {
      await googleSignIn();

      Swal.fire({
        icon: "success",
        title: "Logged in with Google",
        position: "top-end",
        timer: 1500,
        showConfirmButton: false,
      });

      router.push("/");
    } catch (err) {
      setError("Google signup failed");

      Swal.fire({
        icon: "error",
        title: "Google Login Failed",
         position: "top-end",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-[#47A7CE] mb-6">
          Create Account
        </h1>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-4">

         
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg focus:outline-blue-500"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg "
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#47A7CE] text-white py-3 rounded-lg  transition"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        {/* Divider */}
        <div className="my-5 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Google */}
        <button
          onClick={handleGoogle}
          className="w-full flex items-center justify-center gap-2 border py-3 rounded-lg "
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        {/* Login link */}
        <p className="text-center text-sm mt-5 text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-[#47A7CE] font-medium">
            Login
          </a>
        </p>

      </div>
    </div>
  );
}