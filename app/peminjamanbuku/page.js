"use client";
import React from "react";
import Sidebar from "@/components/sidebar";
import Konten from "@/app/peminjamanbuku/components/konten";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Page() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <ToastContainer />
      <div className="flex flex-1 flex-col">
        <div className="flex-1 p-6 overflow-scroll">
          <Konten />
        </div>
      </div>
    </div>
  );
}

export default Page;
