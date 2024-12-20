"use client";
import React, { useState } from "react";
import { Input, Button, Typography } from "@material-tailwind/react";
import { ToastContainer, toast } from 'react-toastify';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig"; // Ensure this is connected to your Firebase config
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sedangMemuat, setSedangMemuat] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setSedangMemuat(true);

    try {
      // Attempt to sign in with Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // If successful, show success toast and redirect
      toast.success("Berhasil masuk!");
      router.push("/beranda");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Terjadi kesalahan saat masuk. Periksa email dan kata sandi.");
    } finally {
      setSedangMemuat(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-[#EAF8F4]">
      <div className="flex w-[800px] bg-white shadow-lg rounded-lg">
        <div className="flex w-1/2 items-center justify-center bg-[#00B894] rounded-l-lg">
          <img src="/icon.png" alt="Login Illustration" className="w-3/4" />
        </div>

        <div className="w-1/2 p-8">
          <Typography
            variant="h4"
            color="blue-gray"
            className="text-center font-bold mb-6 text-[#333333]"
          >
            SELAMAT DATANG
          </Typography>
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <Input
              type="email"
              label="Masukan Alamat Email Anda"
              placeholder="Email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-gray-300 focus:border-[#00B894] focus:ring-[#00B894]"
            />
            <Input
              type="password"
              label="Masukan Kata Sandi Anda"
              placeholder="Kata Sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={<i className="fas fa-eye"></i>}
              className="border-gray-300 focus:border-[#00B894] focus:ring-[#00B894]"
            />
            <Button
              className="mt-4 bg-[#00B894] hover:bg-[#01996f]"
              color="green"
              type="submit"
              disabled={sedangMemuat}
            >
              {sedangMemuat ? 'Loading...' : 'MASUK'}
            </Button>
            <Typography
              variant="small"
              color="gray"
              className="mt-4 text-center text-[#555555]"
            >
              Belum Punya Akun?{" "}
              <a href="/buatakunbaru" className="text-[#00B894] font-bold">
                Buat Akun
              </a>
            </Typography>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
