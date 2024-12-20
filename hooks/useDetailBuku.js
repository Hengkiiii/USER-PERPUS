import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
// PERPUSTAKAAN KAMI
import { db } from "@/lib/firebaseConfig";

const useTampilkanBuku = () => {
    const [sedangMemuatTampilkanBuku, setSedangMemuatTampilkanBuku] =
        useState(false);
    const [daftarBuku, setDaftarBuku] = useState([]);

    const ambilDataBuku = async () => {
        setSedangMemuatTampilkanBuku(true);
        try {
            const querySnapshot = await getDocs(collection(db, "buku"));
            const dataBuku = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setDaftarBuku(dataBuku);
        } catch (error) {
            console.error("Error mengambil data buku:", error);
        } finally {
            setSedangMemuatTampilkanBuku(false);
        }
    };

    useEffect(() => {
        ambilDataBuku();
    }, []);

    return {
        sedangMemuatTampilkanBuku,
        daftarBuku,
    };
};

export default useTampilkanBuku;