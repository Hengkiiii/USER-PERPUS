"use client";
import React, { useState } from "react";
import { CiBookmarkPlus } from "react-icons/ci";
import { FaBookMedical } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
// KOMPONEN
import ModalPinjamBuku from "@/components/modalPinjamBuku";
// Hooks
import useTampilkanDataBuku from "@/hooks/useTampilkanDataBuku";
import useWishList from "@/hooks/useWishList";
import usePinjamBuku from "@/hooks/useAmbilPeminjamanBuku";

function Konten() {
  const [modalBuka, setModalBuka] = useState(false);
  const { sedangMemuat, hasilPencarian } = useTampilkanDataBuku();
  const [bukuDipilih, setBukuDipilih] = useState(null);
  const [bukuDipilihUntukModal, setBukuDipilihUntukModal] = useState(null);
  const { tambahkanKeWishlist } = useWishList();
  const { pinjamBuku } = usePinjamBuku();

  const tutupModal = () => {
    setModalBuka(false);
  };

  const bukaModalBuku = (buku) => {
    setModalBuka(true);
    setBukuDipilihUntukModal(buku);
  };

  const bukaDialog = (buku) => {
    setBukuDipilih(buku);
  };

  const tutupDialog = () => {
    setBukuDipilih(null);
  };

  const handleTambahkanKeWishlist = async (buku) => {
    await tambahkanKeWishlist(buku);
  };

  const handlepinjamBuku = async (buku) => {
    await pinjamBuku(buku, new Date(), 7, 1);
  };

  if (sedangMemuat) {
    return <div>Memuat data buku...</div>;
  }

  return (
    <div className="w-full justify-center mt-2 px-10">
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-300">
        <table className="min-w-full text-left text-sm text-gray-700">
          <thead className="bg-teal-600 text-white">
            <tr className="text-center">
              <th className="w-12 font-semibold text-lg">No</th>
              <th className="w-36 py-3 font-semibold text-lg">Nama Buku</th>
              <th className="w-36 py-3 font-semibold text-lg">Pengarang</th>
              <th className="w-36 py-3 font-semibold text-lg">Stok</th>
              <th className="w-36 font-semibold text-lg">Tahun Terbit</th>
              <th className="px-6 py-3 font-semibold text-lg">ISBN</th>
              <th className="w-36 font-semibold text-lg">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-center">
            {hasilPencarian.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-4 text-red-700">
                  Tidak ada buku yang ditemukan.
                </td>
              </tr>
            ) : (
              hasilPencarian.map((buku, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 transition duration-200"
                >
                  <td className="px-6 py-4 text-center">{index + 1}</td>
                  <td className="px-6 py-4">{buku.Nama_Buku}</td>
                  <td className="px-6 py-4">{buku.Pengarang}</td>
                  <td className="px-6 py-4">{buku.Stok}</td>
                  <td className="px-6 py-4 text-center">{buku.Tahun_Terbit}</td>
                  <td className="w-36 py-4">{buku.ISBN}</td>
                  <td className="w-full py-4 flex items-center justify-center">
                    <FaBookMedical
                      className="mr-2 cursor-pointer"
                      size={18}
                      onClick={() => bukaModalBuku(buku)}
                    />
                    <CiBookmarkPlus
                      className="mr-2 cursor-pointer"
                      size={18}
                      onClick={() => handleTambahkanKeWishlist(buku)}
                    />
                    <IoMdInformationCircleOutline
                      className="mr-2 cursor-pointer"
                      size={18}
                      onClick={() => bukaDialog(buku)}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Dialog untuk Detail Buku */}
      <Dialog open={!!bukuDipilih} handler={tutupDialog}>
        {bukuDipilih && (
          <>
            <DialogHeader className="flex items-center space-x-2">
              <IoMdInformationCircleOutline
                size={24}
                className="text-teal-600"
              />
              <span>Detail Buku</span>
            </DialogHeader>
            <DialogBody divider>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <span className="font-bold w-36">Nama Buku:</span>
                  <span>{bukuDipilih.Nama_Buku}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold w-36">Pengarang:</span>
                  <span>{bukuDipilih.Pengarang}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold w-36">Tahun Terbit:</span>
                  <span>{bukuDipilih.Tahun_Terbit}</span>
                </div>
                <div className="flex items-start">
                  <span className="font-bold w-36">Deskripsi:</span>
                  <span>{bukuDipilih.Deskripsi}</span>
                </div>
              </div>
            </DialogBody>
          </>
        )}
      </Dialog>

      <ModalPinjamBuku
        buka={modalBuka}
        tutup={tutupModal}
        buku={bukuDipilihUntukModal}
      />
    </div>
  );
}

export default Konten;
