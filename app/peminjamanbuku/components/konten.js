"use client";

import React from "react";
// Hooks
import useTampilkanPeminjamanBuku from "@/hooks/useTampilkanPeminjamanBuku";
import useKembalikanBuku from "@/hooks/useKembalikanBuku";

function PeminjamanBukuPage() {
  const { peminjamanBuku, loading, error } = useTampilkanPeminjamanBuku();
  const { kembalikanBuku, sedangMemuatKembalikan } = useKembalikanBuku();

  if (loading) {
    return (
      <div className="text-center py-10 text-lg font-semibold text-teal-600">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-lg font-semibold text-red-600">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50 p-6">
      <h1 className="text-4xl font-semibold text-teal-600 mb-8 text-center">
        Peminjaman Buku
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {peminjamanBuku.length === 0 ? (
          <div className="col-span-full text-center text-gray-600">
            <p className="text-xl">
              Belum ada buku yang dipinjam. Silakan pinjam buku terlebih dahulu!
            </p>
          </div>
        ) : (
          peminjamanBuku.map((buku) => (
            <div
              key={buku.id}
              className="bg-white shadow-md hover:shadow-xl rounded-lg p-6 border border-gray-200 transition-all duration-300 ease-in-out"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-teal-600">
                {buku.Nama_Buku}
              </h2>
              <p className="text-md text-gray-600 mb-2">
                <strong className="text-teal-600">Pengarang:</strong>{" "}
                {buku.Pengarang}
              </p>
              <p className="text-md text-gray-600 mb-2">
                <strong className="text-teal-600">Tanggal Peminjaman:</strong>{" "}
                {buku.Tanggal_Pinjam}
              </p>
              <p className="text-md text-gray-600 mb-2">
                <strong className="text-teal-600">Durasi Peminjaman:</strong>{" "}
                {buku.Lama_Meminjam} hari
              </p>
              <p className="text-md text-gray-600 mb-4">
                <strong className="text-teal-600">Status:</strong> {buku.Status}
              </p>
              <div className="mt-4 py-2 flex justify-center">
                <button
                  onClick={() => kembalikanBuku(buku.ID_Buku, buku.id)}
                  className="mt-6 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
                  disabled={sedangMemuatKembalikan}
                >
                  {sedangMemuatKembalikan
                    ? "Mengembalikan..."
                    : "Kembalikan Buku"}
                </button>
              </div>
              <div className="mt-4 flex justify-end"></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default PeminjamanBukuPage;
