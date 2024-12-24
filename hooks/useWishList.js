// hooks/useWishList.js
import { useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { toast } from "react-toastify";

const useWishList = () => {
  const [sedangMemuatWishlist, setSedangMemuatWishlist] = useState(false);

  const tambahkanKeWishlist = async (buku) => {
    setSedangMemuatWishlist(true);
    try {
      const wishlistRef = collection(db, "wishlist");
      const docRef = doc(wishlistRef);
      const idBuku = buku.id;

      const { id, ...bukuTanpaId } = buku;

      await setDoc(docRef, { ...bukuTanpaId, ID_Buku: idBuku });

      toast.success("Buku berhasil ditambahkan ke wishlist!");
    } catch (error) {
      toast.error("Gagal menambahkan buku ke wishlist. Silakan coba lagi.");
      console.error("Error menambahkan buku ke wishlist:", error);
    } finally {
      setSedangMemuatWishlist(false);
    }
  };
  const ambilWishlist = async () => {
    setSedangMemuatWishlist(true);
    try {
      const querySnapshot = await getDocs(collection(db, "wishlist"));
      return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      toast.error("Gagal mengambil wishlist. Silakan coba lagi.");
      return [];
    } finally {
      setSedangMemuatWishlist(false);
    }
  };

  return {
    sedangMemuatWishlist,
    tambahkanKeWishlist,
    ambilWishlist,
  };
};

export default useWishList;
