"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { Typography } from "@material-tailwind/react";
import useTampilkanDataBuku from "@/hooks/useTampilkanDataBuku";

function Navbar() {
  const { cariBuku, setCariBuku } = useTampilkanDataBuku();

  return (
    <div className="flex flex-col items-center p-6 bg-gray-700 bg-opacity-10">
      <Typography className="text-4xl font-bold text-teal-600 mb-6">
        Daftar Buku
      </Typography>
      <div className="flex flex-row items-center w-full max-w-4xl">
        <input
          type="text"
          value={cariBuku}
          onChange={(e) => setCariBuku(e.target.value)}
          placeholder="Cari judul, penulis, atau ISBN..."
          className="flex-grow p-4 rounded-lg text-gray-700 border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-600"
        />
        <button
          className="ml-4 px-6 py-5 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600 flex items-center justify-center transition duration-200"
          onClick={() => cariBuku}
        >
          <FaSearch className="mr-2" />
          Cari
        </button>
      </div>
    </div>
  );
}

export default Navbar;
