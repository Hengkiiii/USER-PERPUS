"use client";
import React from "react";
import Image from "next/image";

const books = [
  {
    title: "Pemrograman Web Dasar",
    author: "John Doe",
    description:
      "Belajar dasar-dasar pemrograman web menggunakan HTnpm runML, CSS, dan JavaScript.",
    image: "/buku1.jpg",
  },
  {
    title: "Algoritma dan Struktur Data",
    author: "Jane Smith",
    description:
      "Pelajari algoritma dan struktur data yang digunakan dalam pengembangan perangkat lunak.",
    image: "/buku2.jpg",
  },
  {
    title: "Design Pattern",
    author: "Robert Johnson",
    description:
      "Memahami berbagai pola desain dalam pengembangan perangkat lunak untuk meningkatkan kode yang dapat digunakan kembali.",
    image: "/buku3.jpg",
  },
  {
    title: "React untuk Pemula",
    author: "Sarah Lee",
    description:
      "Pelajari dasar-dasar React, pustaka JavaScript untuk membangun antarmuka pengguna.",
    image: "/buku1.jpg",
  },
  {
    title: "Node.js dan Express",
    author: "David Kim",
    description:
      "Membangun aplikasi backend menggunakan Node.js dan Express framework.",
    image: "/buku2.jpg",
  },
  {
    title: "Pengantar AI",
    author: "Emily Brown",
    description:
      "Dasar-dasar kecerdasan buatan dan bagaimana membangun aplikasi AI pertama Anda.",
    image: "/buku3.jpg",
  },
  {
    title: "Node.js dan Express",
    author: "David Kim",
    description:
      "Membangun aplikasi backend menggunakan Node.js dan Express framework.",
    image: "/buku2.jpg",
  },
  {
    title: "Pengantar AI",
    author: "Emily Brown",
    description:
      "Dasar-dasar kecerdasan buatan dan bagaimana membangun aplikasi AI pertama Anda.",
    image: "/buku3.jpg",
  },
  {
    title: "Algoritma dan Struktur Data",
    author: "Jane Smith",
    description:
      "Pelajari algoritma dan struktur data yang digunakan dalam pengembangan perangkat lunak.",
    image: "/buku2.jpg",
  },
  {
    title: "Design Pattern",
    author: "Robert Johnson",
    description:
      "Memahami berbagai pola desain dalam pengembangan perangkat lunak untuk meningkatkan kode yang dapat digunakan kembali.",
    image: "/buku3.jpg",
  },
  {
    title: "React untuk Pemula",
    author: "Sarah Lee",
    description:
      "Pelajari dasar-dasar React, pustaka JavaScript untuk membangun antarmuka pengguna.",
    image: "/buku1.jpg",
  },
  {
    title: "Node.js dan Express",
    author: "David Kim",
    description:
      "Membangun aplikasi backend menggunakan Node.js dan Express framework.",
    image: "/buku2.jpg",
  },
  {
    title: "Pengantar AI",
    author: "Emily Brown",
    description:
      "Dasar-dasar kecerdasan buatan dan bagaimana membangun aplikasi AI pertama Anda.",
    image: "/buku3.jpg",
  },
  {
    title: "Node.js dan Express",
    author: "David Kim",
    description:
      "Membangun aplikasi backend menggunakan Node.js dan Express framework.",
    image: "/buku2.jpg",
  },
  {
    title: "Pengantar AI",
    author: "Emily Brown",
    description:
      "Dasar-dasar kecerdasan buatan dan bagaimana membangun aplikasi AI pertama Anda.",
    image: "/buku3.jpg",
  },
];

function Konten() {
  return (
    <div className="w-full justify-center mt-5 px-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-2 lg:gap-y-12">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-gray-700 bg-opacity-10 p-2 w-72 h-96 rounded-lg shadow-lg border border-black border-opacity-15"
          >
            <Image
              src={book.image}
              alt={book.title}
              width={200}
              height={200}
              className="w-full h-[200px] object-contain rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">
              {book.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Konten;
