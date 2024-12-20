"use client";
import React from "react";
import Image from "next/image";
import useDetailBuku from "@/hooks/useDetailBuku";
import Buku from "@/public/buku1.jpg";

function Konten() {
    const { daftarBuku } = useDetailBuku();

    return (
        <div className="w-full justify-center mt-5 px-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-2 lg:gap-y-12">
                {daftarBuku.map((buku, index) => (
                    <div
                        key={index}
                        className="bg-gray-700 bg-opacity-10 p-2 w-72 h-96 rounded-lg shadow-lg border border-black border-opacity-15"
                    >
                        <Image
                            src={Buku}
                            alt={buku.Nama_Buku}
                            width={200}
                            height={200}
                            className="w-full h-[200px] object-contain rounded-md mb-4"
                        />
                        <h2 className="text-xl font-semibold text-gray-800">
                            {buku.Nama_Buku}
                        </h2>
                        <p className="text-sm text-gray-600 mb-2">{buku.Pengarang}</p>
                        <p className="text-sm text-gray-600">{buku.Deskripsi}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Konten;
