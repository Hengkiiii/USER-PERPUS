"use client";

import React from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import {
  FaBook,
  FaRegBookmark,
  FaCartPlus,
  FaRegHandPaper,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

function Page() {
  const pengarah = useRouter();

  const handleNavigation = (page) => {
    console.log(`Navigating to ${page}`);
    pengarah.push(page);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-64 bg-teal-600 text-white p-6 flex flex-col">
        <h1 className="text-3xl font-semibold text-center mb-8">
          Perpustakaan
        </h1>
        <div className="space-y-4 flex-grow">
          <button
            className="flex items-center space-x-2 w-full text-left cursor-pointer py-2 px-4 rounded-lg hover:bg-teal-500 transition duration-200"
            onClick={() => handleNavigation("/beranda")}
          >
            <AiOutlineHome size={24} />
            <span className="text-lg">Beranda</span>
          </button>
          <button
            className="flex items-center space-x-2 w-full text-left cursor-pointer py-2 px-4 rounded-lg hover:bg-teal-500 transition duration-200"
            onClick={() => handleNavigation("/detailbuku")}
          >
            <FaBook size={24} />
            <span className="text-lg">Detail Buku</span>
          </button>
          <button
            className="flex items-center space-x-2 w-full text-left cursor-pointer py-2 px-4 rounded-lg hover:bg-teal-500 transition duration-200"
            onClick={() => handleNavigation("/peminjamanbuku")}
          >
            <FaCartPlus size={24} />
            <span className="text-lg">Pinjam Buku</span>
          </button>
          <button
            className="flex items-center space-x-2 w-full text-left cursor-pointer py-2 px-4 rounded-lg hover:bg-teal-500 transition duration-200"
            onClick={() => handleNavigation("/wishlist")}
          >
            <FaRegBookmark size={24} />
            <span className="text-lg">Wishlist</span>
          </button>
          <button
            className="flex items-center space-x-2 w-full text-left cursor-pointer py-2 px-4 rounded-lg hover:bg-teal-500 transition duration-200"
            onClick={() => handleNavigation("/kembalikanbuku")}
          >
            <FaRegHandPaper size={24} />
            <span className="text-lg">Kembalikan Buku</span>
          </button>
        </div>
        <div className="space-y-4 mt-6">
          <button className="flex items-center space-x-2 w-full text-left cursor-pointer py-2 px-4 rounded-lg hover:bg-teal-500 transition duration-200">
            <AiOutlineUser size={24} />
            <span className="text-lg">Akun</span>
          </button>
          <button
            className="flex items-center space-x-2 w-full text-left cursor-pointer py-2 px-4 rounded-lg hover:bg-teal-500 transition duration-200"
            onClick={() => handleNavigation("/")}
          >
            <AiOutlineLogout size={24} />
            <span className="text-lg">Keluar</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
