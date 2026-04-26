"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Product = {
  _id: string;
  title: string;
  price: number;
  image?: string;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await api.get("/products");
        setProducts(res.data.data);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">

      <h2 className="text-2xl font-bold mb-8 text-center text-[#4DAAD0]">
        Popular Products
      </h2>

      {error && <p className="text-red-500">{error}</p>}

      {loading ? (
        <div className="h-48 bg-gray-200 animate-pulse rounded-xl" />
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.slice(0, 5).map((p) => (
            <SwiperSlide key={p._id}>
              <div className="border rounded-xl p-4 hover:shadow-xl transition bg-white">

                {/* Image */}
                <div className="h-40 bg-gray-100 rounded-lg mb-3 overflow-hidden">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      No Image
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex justify-between items-center">
<h3 className="font-semibold text-[#47A7CE]">{p.title}</h3>
                <p className="text-[#47A7CE] font-bold">${p.price}</p>
                </div>
                

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}