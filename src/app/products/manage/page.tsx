"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import Swal from "sweetalert2";
import Link from "next/link";


type Product = {
  _id: string;
  title: string;
  price: number;
  category: string;
  image?: string;
};

export default function ManageItemsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  //  pagination state
  const [page, setPage] = useState(1);
  const limit = 6;

  // fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products");
        setProducts(res.data.data || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  //  calculate pagination
  const totalPages = Math.ceil(products.length / limit);

  const start = (page - 1) * limit;
  const end = start + limit;

  const currentProducts = products.slice(start, end);

  // delete
  const handleDelete = async (id: string) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This product will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (!confirm.isConfirmed) return;

    try {
      await api.delete(`/products/${id}`);

      Swal.fire({
        icon: "success",
        title: "Deleted!",
        timer: 1200,
        showConfirmButton: false,
      });

      //  update UI 
      const updated = products.filter((p) => p._id !== id);
      setProducts(updated);

      //   page overflow
      if ((page - 1) * limit >= updated.length && page > 1) {
        setPage(page - 1);
      }

    } catch (error) {
      Swal.fire("Error", "Failed to delete product", "error");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#47a7ce] font-bold text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-2xl font-bold mb-6 text-[#47A7CE]">
          Manage Products
        </h1>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {currentProducts.map((p) => (
            <div
              key={p._id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={p.image || "https://via.placeholder.com/300"}
                className="h-40 w-full object-cover"
              />

              <div className="p-4 space-y-2">
                <h2 className="font-semibold text-[#47A7CE]">{p.title}</h2>
                <p className="text-sm text-gray-500">{p.category}</p>
                <p className="text-[#47A7CE] font-bold">${p.price}</p>

                <div className="flex gap-2 pt-2">
                  <Link
                    href={`/all-products/${p._id}`}
                    className="flex-1 text-center bg-gray-100 py-2 rounded"
                  >
                    View
                  </Link>

                  <button
                    onClick={() => handleDelete(p._id)}
                    className="flex-1 items-center bg-red-500 text-white py-2 rounded"
                  >
                    

                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* EMPTY */}
        {products.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No products found
          </p>
        )}

        {/*  PAGINATION UI */}
        {products.length > limit && (
          <div className="flex justify-center mt-10 gap-2 flex-wrap">

            {/* Prev */}
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Prev
            </button>

            {/* Numbers */}
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-4 py-2 border rounded ${
                  page === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-white"
                }`}
              >
                {i + 1}
              </button>
            ))}

            {/* Next */}
            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Next
            </button>

          </div>
        )}

      </div>
    </div>
  );
}