"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import api from "@/lib/axios";

type Item = {
  _id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  image?: string;
};

export default function ItemsPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  // Fetch from backend
  const fetchItems = async () => {
    try {
      const res = await api.get("/products");

      setItems(res.data.data || []);
    } catch (error) {
      console.log("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // FILTER LOGIC
  const filteredItems = items.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase());

    const matchCategory = category ? item.category === category : true;

    const matchPrice =
      price === "low"
        ? item.price < 200
        : price === "mid"
        ? item.price >= 200 && item.price <= 1000
        : price === "high"
        ? item.price > 1000
        : true;

    return matchSearch && matchCategory && matchPrice;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#47a7ce] text-xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">

      <div className="max-w-6xl mx-auto">

        {/*  Filters */}
        <div className="bg-white p-4 rounded-xl shadow mb-8 grid md:grid-cols-3 gap-4">

          <input
            type="text"
            placeholder="Search items..."
            className="border p-2 rounded-lg w-full text-[#47A7CE] outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border p-2 rounded-lg w-full text-[#47A7CE] outline-none"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
          </select>

          <select
            className="border p-2 rounded-lg w-full text-[#47A7CE] outline-none"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value="">All Prices</option>
            <option value="low">Below $200</option>
            <option value="mid">$200 - $1000</option>
            <option value="high">Above $1000</option>
          </select>

        </div>

        {/*  Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

          {filteredItems.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >

              <img
                src={item.image || "https://via.placeholder.com/300"}
                alt={item.title}
                className="h-40 w-full object-cover"
              />

              <div className="p-4 space-y-2">

                <h2 className="font-semibold text-lg">
                  {item.title}
                </h2>

                <p className="text-gray-500 text-sm line-clamp-2">
                  {item.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold">
                    ${item.price}
                  </span>

                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>

                <Link
                  href={`/all-products/${item._id}`}
                  className="block text-center mt-3 bg-[#47a7ce] text-white py-2 rounded hover:bg-[#47a7ce]"
                >
                  View Details
                </Link>

              </div>
            </div>
          ))}

        </div>

        {/* Empty */}
        {filteredItems.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No items found
          </p>
        )}

      </div>
    </div>
  );
}