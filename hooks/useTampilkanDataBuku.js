import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

const useTampilkanDataBuku = () => {
  const [sedangMemuat, setSedangMemuat] = useState(false);
  const [daftarBuku, setDaftarBuku] = useState([]); // Data asli semua buku
  const [hasilPencarian, setHasilPencarian] = useState([]); // Hasil filter pencarian
  const [cariBuku, setCariBuku] = useState("");

  const ambilDataBuku = async () => {
    setSedangMemuat(true);
    try {
      const querySnapshot = await getDocs(collection(db, "buku"));
      const dataBuku = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setDaftarBuku(dataBuku); // Simpan data asli
      setHasilPencarian(dataBuku); // Tampilkan semua buku secara default
    } catch (error) {
      console.error("Error fetching books data:", error);
    } finally {
      setSedangMemuat(false);
    }
  };

  useEffect(() => {
    ambilDataBuku();
  }, []);

  useEffect(() => {
    if (cariBuku.trim() === "") {
      setHasilPencarian(daftarBuku);
    } else {
      const hasil = daftarBuku.filter((buku) =>
        [buku.Nama_Buku, buku.Pengarang, buku.ISBN].some((field) =>
          String(field).toLowerCase().includes(cariBuku.toLowerCase())
        )
      );
      setHasilPencarian(hasil);
      console.log(hasil);
    }
  }, [cariBuku, daftarBuku]);

  return {
    sedangMemuat,
    hasilPencarian,
    cariBuku,
    setCariBuku,
  };
};

export default useTampilkanDataBuku;
