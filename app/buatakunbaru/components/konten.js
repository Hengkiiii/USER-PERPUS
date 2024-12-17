"use client";

import React, { useState } from "react";
import { Input, Button, Typography } from "@material-tailwind/react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

function Konten() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    // Cek apakah email mengandung '@'
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi email
    if (!validateEmail(email)) {
      setEmailError("Email harus mengandung '@' dan format yang benar.");
    } else {
      setEmailError("");
    }
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
              className="border-gray-300 focus:border-[#00B894] focus:ring-[#00B894]"
            />

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                label="Kata Sandi"
                placeholder="Kata Sandi"
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
                className="border-gray-300 focus:border-[#00B894] focus:ring-[#00B894]"
              />
              <span
                onClick={togglePassword}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </span>
            </div>

            <Button
              className="mt-4 bg-[#00B894] hover:bg-[#01996f]"
              color="green"
            >
              MASUK
            </Button>
            <Typography
              variant="small"
              color="gray"
              className="mt-4 text-center text-[#555555]"
            >
              Sudah Punya Akun?{" "}
              <a href="/page" className="text-[#00B894] font-bold">
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
