import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig"; // Sesuaikan dengan konfigurasi Firebase Anda
import { toast } from "react-toastify"; // Import toast untuk menampilkan notifikasi

const useKeluarnya = () => {
  const router = useRouter();

  const keluar = async () => {
    try {
      // Menghapus data pengguna dari sessionStorage
      sessionStorage.removeItem("userData");

      // Logout dari Firebase Authentication
      await signOut(auth);

      // Menampilkan notifikasi berhasil logout
      toast.success("Berhasil keluar!");

      // Navigasi ke halaman login atau halaman utama
      router.push("/");
    } catch (error) {
      console.error("Gagal logout:", error);
      toast.error("Gagal keluar. Coba lagi.");
      // Anda bisa menambahkan Toast atau pesan error jika diperlukan
    }
  };

  return { keluar };
};

export default useKeluarnya;
