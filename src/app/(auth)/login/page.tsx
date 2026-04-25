"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import Swal from "sweetalert2";


import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const { login, googleSignIn } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //  Email Login
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await login(email, password);

      //  Success alert
      Swal.fire({
        icon: "success",
        title: "Login Successful ",
        text: "Welcome back to NexCart",
        timer: 1500,
        showConfirmButton: false,
      });

      router.push("/");
    } catch (err: any) {
      setError("Invalid email or password");

      //  Error alert
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        timer: 1500,
        position: "top-end",
        text: "Please check your credentials",
        showConfirmButton: false,
      });
    } finally {
      setLoading(false);
    }
  };

  //  Google Login
  const handleGoogle = async () => {
    try {
      await googleSignIn();

      //  Success alert
      Swal.fire({
        icon: "success",
        title: "Google Login Successful",
        position: "top-end",
        timer: 1500,
        showConfirmButton: false,
      });

      router.push("/");
    } catch (err) {
      setError("Google login failed");

      //  Error alert
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
          Login to NexCart
        </h1>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg focus:outline-blue-500"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg focus:outline-blue-500"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#47A7CE] text-white py-3 rounded-lg hover:bg-[#3a8dbd] transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="my-5 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogle}
          className="w-full flex items-center justify-center gap-2 border border-[#47A7CE] py-3 rounded-lg  transition"
        >
         <FcGoogle size={20}/>

          Continue with Google
        </button>

        {/* Signup link */}
        <p className="text-center text-sm mt-5 text-gray-600">
          Don’t have an account?{" "}
          <a href="/signup" className="text-[#47A7CE] font-medium">
            Sign up
          </a>
        </p>

      </div>
    </div>
  );
}