"use client";

import React from "react";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineBook,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
// HOOKS
import useTampilkanProfilPengguna from "@/hooks/useTampilkanProfilPengguna";

function AkunPage() {
  const gambarBawaan = require("@/assets/images/GambarBawaan.jpeg");
  const { profil, sedangMemuatProfilPengguna, error } =
    useTampilkanProfilPengguna();
  const pengarah = useRouter();

  const handleNavigation = (page) => {
    console.log(`Navigating to ${page}`);
    pengarah.push(page);
  };

  if (sedangMemuatProfilPengguna) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-6">
        <div className="text-white">Memuat profil...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-6">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-6">
      <Card className="w-full sm:w-[800px] bg-gradient-to-tr from-teal-600 to-teal-900 shadow-lg rounded-xl transform transition-all hover:scale-105">
        <CardBody className="flex flex-row items-center p-8 text-white">
          <button
            onClick={() => handleNavigation("/beranda")}
            className="absolute top-4 left-4 p-2 bg-teal-800 rounded-full text-white shadow-md hover:bg-teal-700"
          >
            <AiOutlineArrowLeft size={24} />
          </button>

          <div className="w-1/3 flex justify-center">
            <Image
              src={gambarBawaan}
              alt="User Profile"
              className="w-32 h-32 rounded-full border-4 border-white mb-6 shadow-xl transition-transform transform hover:scale-110"
            />
          </div>
          <div className="w-2/3 ml-8">
            <Typography
              variant="h4"
              color="white"
              className="font-semibold mb-6 text-center sm:text-left"
            >
              Profil Pengguna
            </Typography>

            <div className="space-y-4 w-full">
              <div className="flex items-center space-x-4 bg-teal-800 p-4 rounded-xl shadow-md">
                <AiOutlineUser size={30} color="#ffffff" />
                <div className="flex flex-col w-full">
                  <Typography variant="body2" color="gray-200">
                    Nama Lengkap
                  </Typography>
                  <Typography variant="h6" color="white">
                    {profil?.namaLengkap || "Tidak tersedia"}
                  </Typography>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-teal-800 p-4 rounded-xl shadow-md">
                <AiOutlineBook size={30} color="#ffffff" />
                <div className="flex flex-col w-full">
                  <Typography variant="body2" color="gray-200">
                    Program Studi
                  </Typography>
                  <Typography variant="h6" color="white">
                    {profil?.prodi || "Tidak tersedia"}
                  </Typography>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-teal-800 p-4 rounded-xl shadow-md">
                <AiOutlineMail size={30} color="#ffffff" />
                <div className="flex flex-col w-full">
                  <Typography variant="body2" color="gray-200">
                    Email
                  </Typography>
                  <Typography variant="h6" color="white">
                    {profil?.email || "Tidak tersedia"}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default AkunPage;
