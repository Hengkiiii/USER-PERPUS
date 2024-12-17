"use client";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { FaSearch, FaCalendarAlt, FaBookOpen } from "react-icons/fa";

const PengembalianBuku = () => {
  const [returnDate, setReturnDate] = useState("");
  const [condition, setCondition] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSearch = () => {
    console.log("Sedang mencari buku untuk dikembalikan...");
  };

  const handleReturn = () => {
    console.log(`Buku dikembalikan tanggal: ${returnDate}`);
    console.log(`Kondisi buku: ${condition}`);
    console.log(`Jumlah buku: ${quantity}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-teal-500 to-teal-700 text-white p-6">
          <Typography variant="h4" align="center" className="font-bold">
            Pengembalian Buku
          </Typography>
          <Typography variant="body2" align="center" className="mt-2">
            Kelola pengembalian buku dengan mudah dan cepat
          </Typography>
        </div>
        <div className="p-8 space-y-6">
          <div>
            <Typography
              variant="body1"
              component="label"
              htmlFor="search"
              className="text-teal-700"
            >
              Cari Buku
            </Typography>
            <div className="flex mt-2 items-center">
              <input
                id="search"
                type="text"
                className="w-full border rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-600"
                placeholder="Masukkan judul atau pengarang buku"
              />
              <button
                className="bg-teal-600 text-white px-4 py-2 rounded-r-lg hover:bg-teal-700 transition duration-200 flex items-center"
                onClick={handleSearch}
              >
                <FaSearch className="mr-2" />
                Cari
              </button>
            </div>
          </div>
          <div>
            <Typography
              variant="h6"
              className="text-teal-700 font-semibold mb-2"
            >
              Detail Buku
            </Typography>
            <div className="border rounded-lg p-4 bg-gray-50 shadow-sm">
              <Typography variant="body1" className="mb-2">
                <span className="font-medium">Judul:</span> Buku Contoh
              </Typography>
              <Typography variant="body1" className="mb-2">
                <span className="font-medium">Pengarang:</span> Nama Pengarang
              </Typography>
              <Typography variant="body1" className="mb-2">
                <span className="font-medium">Tahun Terbit:</span> 2023
              </Typography>
              <Typography variant="body1" className="mb-2">
                <span className="font-medium">Stok:</span> 5 Buku
              </Typography>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Typography
                variant="body1"
                component="label"
                htmlFor="returnDate"
                className="text-teal-700"
              >
                Tanggal Pengembalian
              </Typography>
              <div className="relative mt-1">
                <FaCalendarAlt className="absolute top-3 left-3 text-teal-600" />
                <input
                  id="returnDate"
                  type="date"
                  className="w-full border rounded-lg py-2 pl-10 px-4 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
            </div>
            <div>
              <Typography
                variant="body1"
                component="label"
                htmlFor="condition"
                className="text-teal-700"
              >
                Kondisi Buku
              </Typography>
              <input
                id="condition"
                type="text"
                className="w-full border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-600"
                placeholder="Masukkan kondisi buku (contoh: Baik)"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
              />
            </div>
            <div>
              <Typography
                variant="body1"
                component="label"
                htmlFor="quantity"
                className="text-teal-700"
              >
                Jumlah Buku
              </Typography>
              <input
                id="quantity"
                type="number"
                className="w-full border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-600"
                placeholder="Masukkan jumlah buku"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
              />
            </div>
          </div>
          <div className="text-center">
            <button
              className="bg-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-700 transition duration-200 flex items-center justify-center"
              onClick={handleReturn}
            >
              <FaBookOpen className="mr-2" />
              Kembalikan Buku
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PengembalianBuku;
