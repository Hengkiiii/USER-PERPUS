import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebaseConfig"; // Pastikan path ini benar

const useTampilkanPeminjamanBuku = () => {
  const [
    sedangMemuatTampilkanPeminjamanBuku,
    setSedangMemuatTampilkanPeminjamanBuku,
  ] = useState(false);
  const [peminjamanBuku, setPeminjamanBuku] = useState([]);
  const [error, setError] = useState(null);

  const ambilDataPeminjamanBuku = async () => {
    setSedangMemuatTampilkanPeminjamanBuku(true);
    try {
      const userData = JSON.parse(sessionStorage.getItem("userData") || "{}");
      const userId = userData?.uid;

      if (!userId) {
        console.warn("User ID tidak ditemukan di session storage.");
        setPeminjamanBuku([]);
        return;
      }

      // Ambil data peminjaman
      const peminjamanQuery = query(
        collection(db, "peminjaman"),
        where("ID_Pengguna", "==", userId)
      );
      const querySnapshot = await getDocs(peminjamanQuery);
      const dataPeminjamanBuku = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Ambil data buku untuk setiap ID_Buku
      const dataDenganPengarang = await Promise.all(
        dataPeminjamanBuku.map(async (peminjaman) => {
          const bukuRef = doc(db, "buku", peminjaman.ID_Buku); // Referensi ke dokumen buku
          const bukuSnapshot = await getDoc(bukuRef);
          const bukuData = bukuSnapshot.exists() ? bukuSnapshot.data() : {};

          return {
            ...peminjaman,
            Pengarang: bukuData.Pengarang || "Tidak Diketahui", // Tambahkan pengarang
          };
        })
      );

      setPeminjamanBuku(dataDenganPengarang);
    } catch (err) {
      setError("Gagal memuat data peminjaman.");
      console.error("Error mengambil data peminjaman:", err);
    } finally {
      setSedangMemuatTampilkanPeminjamanBuku(false);
    }
  };

  useEffect(() => {
    ambilDataPeminjamanBuku();
  }, []);

  return {
    sedangMemuatTampilkanPeminjamanBuku,
    peminjamanBuku,
    error,
  };
};

export default useTampilkanPeminjamanBuku;
