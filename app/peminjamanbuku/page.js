"use client";
import React from "react";
import Konten from "@/app/peminjamanbuku/components/konten";

function Page() {
  return (
    <div className="flex h-full">
      <div className="flex flex-1 flex-col">
        <Konten />
      </div>
    </div>
  );
}

export default Page;
