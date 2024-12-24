"use client";

import React from "react";
import { FaTrashAlt } from "react-icons/fa";
// Hooks
import useTampilkanWishList from "@/hooks/useTampilkanWishList";
import useHapusWishList from "@/hooks/useHapusWishList";

function WishlistPage() {
  const { daftarWishList } = useTampilkanWishList();
  const { sedangMemuatHapus, hapusDariWishlist } = useHapusWishList();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-semibold text-teal-600 mb-6 text-center">
        Wishlist Buku
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {daftarWishList.length === 0 ? (
          <div className="col-span-full text-center text-gray-600">
            <p>Wishlist kosong. Tambahkan buku yang Anda inginkan!</p>
          </div>
        ) : (
          daftarWishList.map((buku) => (
            <div
              key={buku.id}
              className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-xl transition duration-200"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {buku.Nama_Buku}
              </h2>
              <p className="text-sm text-gray-600">
                <strong>Pengarang:</strong> {buku.Pengarang}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Tahun Terbit:</strong> {buku.Tahun_Terbit}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Deskripsi:</strong> {buku.Deskripsi}
              </p>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => hapusDariWishlist(buku.id)}
                  disabled={sedangMemuatHapus}
                  className={`flex items-center space-x-1 px-3 py-2 text-sm rounded-lg transition duration-200 ${
                    sedangMemuatHapus
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-red-600 text-white hover:bg-red-700"
                  }`}
                >
                  <FaTrashAlt size={16} />
                  <span>Hapus</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default WishlistPage;
