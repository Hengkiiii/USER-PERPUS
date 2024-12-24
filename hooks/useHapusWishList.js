import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { toast } from "react-toastify";

const useHapusWishList = () => {
  const [sedangMemuatHapus, setSedangMemuatHapus] = useState(false);

  const hapusDariWishlist = async (idBuku) => {
    setSedangMemuatHapus(true);

    console.log(`Menghapus buku dengan ID: ${idBuku}`);

    try {
      const bukuRef = doc(db, "wishlist", idBuku);
      await deleteDoc(bukuRef);
      toast.success("Buku berhasil dihapus dari wishlist!");
    } catch (error) {
      toast.error("Gagal menghapus buku dari wishlist. Silakan coba lagi.");
    } finally {
      setSedangMemuatHapus(false);
    }
  };

  return {
    sedangMemuatHapus,
    hapusDariWishlist,
  };
};

export default useHapusWishList;
