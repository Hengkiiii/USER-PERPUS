import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
// PERPUSTAKAAN KAMI
import { db } from "@/lib/firebaseConfig";

const useTampilkanWishList = () => {
    const [sedangMemuatTampilkanWishList, setSedangMemuatTampilkanWishList] =
        useState(false);
    const [daftarWishList, setDaftarWishList] = useState([]);

    const ambilDataWishList = async () => {
        setSedangMemuatTampilkanWishList(true);
        try {
            const querySnapshot = await getDocs(collection(db, "wishlist"));
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