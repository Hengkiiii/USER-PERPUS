import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "@/lib/firebaseConfig";
import { useRouter } from "next/navigation";

const useMasukDenganEmailKatasandi = () => {
    const [sedangMemuat, setSedangMemuat] = useState(false);
    const router = useRouter();

    const handleNavigation = (url) => {
        if (url.startsWith("http")) {
            window.location.href = url;
        } else {
            router.push(url);
        }
    };

    const masukDenganEmailKatasandi = async (email, password) => {
        setSedangMemuat(true);
        try {
            // Masuk dengan email dan kata sandi menggunakan Firebase Authentication
            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            // Jika login berhasil, tampilkan toast sukses dan arahkan ke halaman beranda atau halaman lain
            toast.success("Berhasil masuk!");
            handleNavigation("/beranda");  // Ganti dengan halaman yang sesuai setelah login
        } catch (error) {
            console.error("Gagal masuk:", error);
            if (error.code === 'auth/user-not-found') {
                toast.error("Email tidak ditemukan.");
            } else if (error.code === 'auth/wrong-password') {
                toast.error("Kata sandi salah.");
            } else {
                toast.error("Terjadi kesalahan saat masuk.");
            }
        } finally {
            setSedangMemuat(false);
        }
    };

    return { sedangMemuat, masukDenganEmailKatasandi };
};

export default useMasukDenganEmailKatasandi;
