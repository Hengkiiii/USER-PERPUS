"use client";

import React, { useState } from "react";
import { Input, Button, Typography } from "@material-tailwind/react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
//hooks
import useLoginPengguna from "@/hooks/useLoginPengguna";

function Konten() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [konfirmasiPassword, setKonfirmasiPassword] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [prodi, setProdi] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { sedangMemuat, buatAkunBaru } = useLoginPengguna();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    // Cek apakah email mengandung '@'
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi email
    if (!validateEmail(email)) {
      setEmailError("Email harus mengandung '@' dan format yang benar.");
      return;
    } else {
      setEmailError("");
    }

    // Validasi password
    if (password !== konfirmasiPassword) {
      setPasswordError("Kata sandi dan konfirmasi kata sandi tidak cocok.");
      return;
    } else {
      setPasswordError("");
    }

    // Panggil hook untuk membuat akun baru
    const dataPengguna = {
      namaLengkap,
      prodi,
    };
    await buatAkunBaru(email, password, dataPengguna);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-[#EAF8F4]">
      <div className="flex w-[900px] bg-white shadow-lg rounded-lg">
        {/* Left Side - Illustration */}
        <div className="flex w-1/2 items-center justify-center bg-[#00B894] rounded-l-lg">
          <img src="/icon.png" alt="Register Illustration" className="w-3/4" />
        </div>

        <div className="w-1/2 p-8">
          <Typography
            variant="h4"
            color="blue-gray"
            className="text-center font-bold mb-6 text-[#333333]"
          >
            BUAT AKUN
          </Typography>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              type="text"
              label="Nama Lengkap"
              placeholder="Nama Lengkap"
              value={namaLengkap}
              onChange={(e) => setNamaLengkap(e.target.value)}
              className="border-gray-300 focus:border-[#00B894] focus:ring-[#00B894]"
            />
            <div className="relative">
              <Input
                type="email"
                label="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-gray-300 focus:border-[#00B894] focus:ring-[#00B894]"
              />
              {emailError && (
                <p className="text-red-500 text-xs mt-1">{emailError}</p>
              )}
            </div>
            <Input
              type="text"
              label="Prodi"
              placeholder="Prodi"
              value={prodi}
              onChange={(e) => setProdi(e.target.value)}
              className="border-gray-300 focus:border-[#00B894] focus:ring-[#00B894]"
            />

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                label="Kata Sandi"
                placeholder="Kata Sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-gray-300 focus:border-[#00B894] focus:ring-[#00B894]"
              />
              <span
                onClick={togglePassword}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </span>
            </div>

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                label="Konfirmasi Kata Sandi"
                placeholder="Konfirmasi Kata Sandi"
                value={konfirmasiPassword}
                onChange={(e) => setKonfirmasiPassword(e.target.value)}
                className="border-gray-300 focus:border-[#00B894] focus:ring-[#00B894]"
              />
              <span
                onClick={togglePassword}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </span>
            </div>

            {passwordError && (
              <p className="text-red-500 text-xs mt-1">{passwordError}</p>
            )}

            <Button
              className="mt-4 bg-[#00B894] hover:bg-[#01996f]"
              color="green"
              type="submit"
              disabled={sedangMemuat}
            >
              {sedangMemuat ? "Memuat..." : "DAFTAR"}
            </Button>
            <Typography
              variant="small"
              color="gray"
              className="mt-4 text-center text-[#555555]"
            >
              Sudah Punya Akun?{" "}
              <a href="/" className="text-[#00B894] font-bold">
                Masuk
              </a>
            </Typography>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Konten;
