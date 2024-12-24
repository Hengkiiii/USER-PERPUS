import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
// PERPUSTAKAAN KAMI
import { db } from "@/lib/firebaseConfig";

const useTampilkanWishList = () => {
  const [sedangMemuatTampilkanWishList, setSedangMemuatTampilkanWishList] =
    useState(false);
  const [daftarWishList, setDaftarWishList] = useState([]);

  const ambilDataWishList = async () => {
    setSedangMemuatTampilkanWishList(true);
    try {
      const userData = JSON.parse(sessionStorage.getItem("userData") || "{}");
      const userId = userData?.uid;

      if (!userId) {
        console.warn("User ID tidak ditemukan di session storage.");
        setDaftarWishList([]);
        return;
      }

      const wishlistQuery = query(
        collection(db, "wishlist"),
        where("ID_Pengguna", "==", userId)
      );

      const querySnapshot = await getDocs(wishlistQuery);
      const dataWishList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setDaftarWishList(dataWishList);
    } catch (error) {
      console.error("Error mengambil data wishlist:", error);
    } finally {
      setSedangMemuatTampilkanWishList(false);
    }
  };

  useEffect(() => {
    ambilDataWishList();
  }, []);

  return {
    sedangMemuatTampilkanWishList,
    daftarWishList,
  };
};

export default useTampilkanWishList;
