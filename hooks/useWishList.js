import { useState } from "react";
import { collection, doc, setDoc, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { toast } from "react-toastify";

const useWishList = () => {
  const [sedangMemuatWishlist, setSedangMemuatWishlist] = useState(false);

  const isBukuTersedia = async (namaBuku) => {
    const querySnapshot = await getDocs(collection(db, "wishlist"));
    const existingBuku = querySnapshot.docs.find(
      (doc) => doc.data().Nama_Buku === namaBuku
    );
    return existingBuku !== undefined;
  };

  const tambahkanKeWishlist = async (buku) => {
    setSedangMemuatWishlist(true);
    try {
      const bukuTersedia = await isBukuTersedia(buku.Nama_Buku);
      if (bukuTersedia) {
        toast.error("Buku sudah ada di wishlist!");
        return;
      }

      const wishlistRef = collection(db, "wishlist");
      const docRef = doc(wishlistRef);
      const idBuku = docRef.id;
      const dataPengguna = sessionStorage.getItem("userData");
      const idPengguna = JSON.parse(dataPengguna).uid;

      const { id, ...bukuTanpaId } = buku;

      await setDoc(docRef, {
        ...bukuTanpaId,
        ID_Buku: idBuku,
        ID_Pengguna: idPengguna,
      });

      toast.success("Buku berhasil ditambahkan ke wishlist!");
    } catch (error) {
      toast.error("Gagal menambahkan buku ke wishlist. Silakan coba lagi.");
      console.error("Error menambahkan buku ke wishlist:", error);
    } finally {
      setSedangMemuatWishlist(false);
    }
  };

  return {
    sedangMemuatWishlist,
    tambahkanKeWishlist,
  };
};

export default useWishList;
