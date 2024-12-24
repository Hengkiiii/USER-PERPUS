import { useState } from "react";
import { toast } from "react-toastify";
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig"; // Pastikan path ini sudah benar

const useAmbilPeminjamanBuku = () => {
  const [tanggalPinjam, setTanggalPinjam] = useState("");
  const [lamaMeminjam, setLamaMeminjam] = useState("");
  const [sedangMemuat, setSedangMemuat] = useState(false);

  const handlePinjamBuku = async (buku, tutupModal) => {
    setSedangMemuat(true);

    // Validasi input
    if (!tanggalPinjam || !lamaMeminjam) {
      toast.error("Tanggal pinjam dan lama meminjam harus diisi!");
      setSedangMemuat(false);
      return;
    }

    const pengguna = JSON.parse(sessionStorage.getItem("userData"));
    const idPengguna = pengguna?.uid;

    try {
      const bukuRef = doc(db, "buku", buku.id);

      // Cek stok buku
      const bukuSnapshot = await getDoc(bukuRef);
      if (!bukuSnapshot.exists()) {
        toast.error("Buku tidak ditemukan.");
        setSedangMemuat(false);
        return;
      }

      const stokSaatIni = bukuSnapshot.data().Stok;
      if (stokSaatIni <= 0) {
        toast.error("Stok buku sudah habis.");
        setSedangMemuat(false);
        return;
      }

      // Kurangi stok buku
      await updateDoc(bukuRef, {
        Stok: stokSaatIni - 1,
      });

      // Tambahkan data peminjaman
      const peminjamanRef = collection(db, "peminjaman");
      await addDoc(peminjamanRef, {
        Nama_Buku: buku.Nama_Buku,
        Tanggal_Pinjam: tanggalPinjam,
        Lama_Meminjam: lamaMeminjam,
        ID_Buku: buku.id,
        ID_Pengguna: idPengguna,
        Status: "Pinjam",
      });

      toast.success("Buku berhasil dipinjam!");
      tutupModal();
    } catch (error) {
      toast.error("Gagal meminjam buku. Silakan coba lagi.");
      console.error("Error peminjaman buku:", error);
    } finally {
      setSedangMemuat(false);
    }
  };

  return {
    tanggalPinjam,
    setTanggalPinjam,
    lamaMeminjam,
    setLamaMeminjam,
    sedangMemuat,
    handlePinjamBuku,
  };
};

export default useAmbilPeminjamanBuku;
