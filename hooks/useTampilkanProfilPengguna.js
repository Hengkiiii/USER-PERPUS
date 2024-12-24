// hooks/useTampilkanProfilPengguna.js

import { useState, useEffect } from "react";
import { db } from "@/lib/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const useTampilkanProfilPengguna = () => {
  const [profil, setProfil] = useState(null);
  const [sedangMemuatProfilPengguna, setSedangMemuatProfilPengguna] =
    useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const ambilProfil = async () => {
      if (!user?.uid) {
        setError("Pengguna tidak terautentikasi");
        setSedangMemuatProfilPengguna(false);
        return;
      }

      try {
        const docRef = doc(db, "pengguna", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProfil(docSnap.data());
        } else {
          setError("Profil pengguna tidak ditemukan");
        }
      } catch (err) {
        setError("Terjadi kesalahan saat mengambil data");
      } finally {
        setSedangMemuatProfilPengguna(false);
      }
    };

    if (user) {
      ambilProfil();
    }
  }, [user]);

  return {
    profil,
    sedangMemuatProfilPengguna,
    error,
  };
};

export default useTampilkanProfilPengguna;
