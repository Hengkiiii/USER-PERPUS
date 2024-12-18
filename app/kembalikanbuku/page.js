
'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Typography from "@mui/material/Typography";
import { FaBookOpen, FaArrowLeft } from "react-icons/fa";

const PengembalianBuku = () => {
  const [formData, setFormData] = useState({
    bookName: "",
    description: "",
    borrowedDate: "",
    dueDate: "",
    quantity: 1,
  });
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReturn = () => {
    console.log("Proses pengembalian buku:");
    console.log(formData);
    console.log("Buku berhasil dikembalikan.");
    setFormData({
      bookName: "",
      description: "",
      borrowedDate: "",
      dueDate: "",
      quantity: 1,
    });
  };

  const handleBack = () => {
    router.push("/beranda");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-teal-500 to-teal-700 text-white p-6">
          <Typography variant="h4" align="center" className="font-bold">
            Pengembalian Buku
          </Typography>
          <Typography variant="body2" align="center" className="mt-2">
            Lengkapi detail buku untuk proses pengembalian
          </Typography>
        </div>
        <div className="p-8 space-y-6">
          <form className="space-y-4">
            <div>
              <Typography
                variant="body1"
                component="label"
                htmlFor="bookName"
                className="text-teal-700"
              >
                Nama Buku
              </Typography>
              <input
                id="bookName"
                name="bookName"
                type="text"
                className="w-full border rounded-lg py-2 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
                placeholder="Masukkan nama buku"
                value={formData.bookName}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <Typography
                variant="body1"
                component="label"
                htmlFor="description"
                className="text-teal-700"
              >
                Deskripsi
              </Typography>
              <textarea
                id="description"
                name="description"
                rows="3"
                className="w-full border rounded-lg py-2 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
                placeholder="Masukkan deskripsi buku"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <Typography
                  variant="body1"
                  component="label"
                  htmlFor="borrowedDate"
                  className="text-teal-700"
                >
                  Tanggal Peminjaman
                </Typography>
                <input
                  id="borrowedDate"
                  name="borrowedDate"
                  type="date"
                  className="w-full border rounded-lg py-2 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  value={formData.borrowedDate}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex-1">
                <Typography
                  variant="body1"
                  component="label"
                  htmlFor="dueDate"
                  className="text-teal-700"
                >
                  Tanggal Pengembalian
                </Typography>
                <input
                  id="dueDate"
                  name="dueDate"
                  type="date"
                  className="w-full border rounded-lg py-2 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  value={formData.dueDate}
                  onChange={handleInputChange}
                />
              </div>
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
                name="quantity"
                type="number"
                min="1"
                className="w-full border rounded-lg py-2 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
                value={formData.quantity}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <div className="flex justify-between mt-6">
            <button
              className="bg-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-700 transition duration-200 flex items-center justify-center"
              onClick={handleBack}
            >
              <FaArrowLeft className="mr-2" />
              Kembali
            </button>

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
