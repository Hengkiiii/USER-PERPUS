import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { auth, db } from "@/lib/firebaseConfig";
import { useRouter } from "next/navigation";

const useBuatAkunBaru = () => {
    const [sedangMemuat, setSedangMemuat] = useState(false);
    const router = useRouter();

    const handleNavigation = (url) => {
        if (url.startsWith("http")) {
            window.location.href = url;
        } else {
            router.push(url);
        }
    };

    const buatAkunBaru = async (email, password, dataPengguna) => {
        setSedangMemuat(true);
        try {
            // Buat akun pengguna di Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            const penggunaRef = collection(db, "pengguna");
            await addDoc(penggunaRef, {
                uid: userCredential.user.uid,
                email,
                namaLengkap: dataPengguna.namaLengkap,
                prodi: dataPengguna.prodi,
                dibuatPada: serverTimestamp(),
            });

            toast.success("Akun berhasil dibuat!");

            handleNavigation("/buatakunbaru");
        } catch (error) {
            console.error("Gagal membuat akun:", error);
            toast.error("Terjadi kesalahan saat membuat akun.");
        } finally {
            setSedangMemuat(false);
        }
    };

    return { sedangMemuat, buatAkunBaru };
};

export default useBuatAkunBaru;
