import { useState } from "react";
import { doc, updateDoc, increment, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { toast } from "react-toastify";

const useKembalikanBuku = () => {
  const [sedangMemuatKembalikan, setSedangMemuatKembalikan] = useState(false);

  const kembalikanBuku = async (idBuku, idPeminjaman) => {
    setSedangMemuatKembalikan(true);

    try {
      const bukuRef = doc(db, "buku", idBuku);
      await updateDoc(bukuRef, {
        Stok: increment(1),
      });

      const peminjamanRef = doc(db, "peminjaman", idPeminjaman);
      await deleteDoc(peminjamanRef);

      toast.success("Buku berhasil dikembalikan");
    } catch (error) {
      console.error("Error mengembalikan buku:", error);
      toast.error("Terjadi kesalahan saat mengembalikan buku.");
    } finally {
      setSedangMemuatKembalikan(false);
    }
  };

  return { kembalikanBuku, sedangMemuatKembalikan };
};

export default useKembalikanBuku;
