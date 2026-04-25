"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import api from "@/lib/axios";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  createdAt: string;
};

export default function ItemDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const [item, setItem] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // fetch single product
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await api.get(`/products/${id}`);
        setItem(res.data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchItem();
  }, [id]);

  // fetch related products
  useEffect(() => {
    const fetchRelated = async () => {
      try {
        const res = await api.get("/products");
        const all = res.data.data;

        const filtered = all
          .filter((p: Product) => p._id !== id)
          .slice(0, 4);

        setRelated(filtered);
      } catch (err) {
        console.log(err);
      }
    };

    if (id) fetchRelated();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#47a7ce] text-xl font-bold">
        Loading...
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#47a7ce]">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">

      <div className="max-w-6xl mx-auto">

        {/* BACK BUTTON */}
        <button
          onClick={() => router.back()}
          className="mb-6 text-[#47a7ce] hover:underline flex items-center gap-2"
        >
          <IoMdArrowBack />
Back to Products
        </button>

        {/* MAIN DETAILS */}
        <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-2xl shadow">

          {/* IMAGE */}
          <div>
            <img
              src={item.image || "/placeholder.png"}
              alt={item.title}
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>

          {/* INFO */}
          <div className="space-y-4">

            <h1 className="text-3xl font-bold text-[#47a7ce]">
              {item.title}
            </h1>

            <p className="text-gray-500">
              {item.description}
            </p>

            <div className="flex gap-3">
              <span className="px-3 py-1 bg-blue-100 text-[#47a7ce] rounded-full text-sm">
                {item.category}
              </span>

              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                ${item.price}
              </span>
            </div>

            <p className="text-sm text-gray-400">
              Created: {new Date(item.createdAt).toLocaleDateString()}
            </p>

          </div>
        </div>

        {/* RELATED ITEMS */}
        <div className="mt-12">

          <h2 className="text-2xl font-bold mb-6 text-[#47a7ce]">
            Related Products
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">

            {related.map((p) => (
              <Link
                key={p._id}
                href={`/all-products/${p._id}`}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={p.image || "/placeholder.png"}
                  className="h-32 w-full object-cover"
                  alt={p.title}
                />

                <div className="p-3">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm text-gray-500">
                    ${p.price}
                  </p>
                </div>
              </Link>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}