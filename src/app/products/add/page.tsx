"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import api from "@/lib/axios";

export default function AddItemPage() {
  const [form, setForm] = useState({
    title: "",
    shortDescription: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/products", {
        title: form.title,
        shortDescription: form.shortDescription,
        description: form.description,
        price: Number(form.price),
        category: form.category,
        image: form.image,
      });

      Swal.fire({
        icon: "success",
        title: "Product Added",
        position: "top-end",
        text: "Your product is live now!",
        timer: 1500,
        showConfirmButton: false,
      });

      setForm({
        title: "",
        shortDescription: "",
        description: "",
        price: "",
        category: "",
        image: "",
      });
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Failed",
         position: "top-end",
          timer: 1500,
        text: err?.response?.data?.message,
        showConfirmButton: false,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-6">

        {/* LEFT: FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-4"
        >
          <h1 className="text-3xl font-bold text-center text-[#47A7CE]">
            Add New Product
          </h1>

          <input
            name="title"
            placeholder="Product Title"
            onChange={handleChange}
            value={form.title}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            name="shortDescription"
            placeholder="Short Description"
            onChange={handleChange}
            value={form.shortDescription}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <textarea
            name="description"
            placeholder="Full Description"
            onChange={handleChange}
            value={form.description}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            rows={4}
          />

          <input
            name="price"
            type="number"
            placeholder="Price"
            onChange={handleChange}
            value={form.price}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <select
            name="category"
            onChange={handleChange}
            value={form.category}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
          </select>

          <input
            name="image"
            placeholder="Image URL (optional)"
            onChange={handleChange}
            value={form.image}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* BUTTON */}
          <button
            disabled={loading}
            className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 transition"
          >
            {loading ? "Adding Product..." : "Add Product"}
          </button>
        </form>

        {/* RIGHT: PREVIEW */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-center">
          <h2 className="text-xl font-bold mb-4 text-gray-700">
            Live Preview
          </h2>

          <div className="border rounded-xl overflow-hidden">

            {form.image ? (
              <img
                src={form.image}
                alt="preview"
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}

            <div className="p-4 space-y-2">
              <h3 className="font-bold text-lg text-[#47a7ce]">
                {form.title || "Product Title"}
              </h3>

              <p className="text-sm text-gray-500">
                {form.shortDescription || "Short description here..."}
              </p>

              <p className="text-[#47a7ce] font-bold">
                ${form.price || "0"}
              </p>

              <span className="text-xs px-2 py-1 bg-blue-100 text-[#47a7ce] rounded">
                {form.category || "category"}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}