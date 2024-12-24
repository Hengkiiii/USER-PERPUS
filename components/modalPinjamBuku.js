import React, { useState } from "react";
import {
  Input,
  Button,
  Dialog,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import useAmbilPeminjamanBuku from "@/hooks/useAmbilPeminjamanBuku";

const ModalPinjamBuku = ({ buka, tutup, buku }) => {
  const {
    tanggalPinjam,
    setTanggalPinjam,
    lamaMeminjam,
    setLamaMeminjam,
    sedangMemuat,
    handlePinjamBuku,
  } = useAmbilPeminjamanBuku();

  const handleSubmit = () => {
    if (!tanggalPinjam || !lamaMeminjam) {
      toast.error("Tanggal pinjam dan lama meminjam harus diisi!");
      return;
    }

    // Pass detail buku dan fungsi tutup modal ke handlePinjamBuku
    handlePinjamBuku(buku, tutup);
  };

  return (
    <Dialog size="sm" open={buka} handler={tutup} className="p-4">
      <DialogHeader className="relative m-0 block text-teal-600">
        <Typography variant="h4">Pinjam Buku</Typography>
        <Typography className="mt-1 font-normal text-blue-gray-500">
          Isi data untuk meminjam buku
        </Typography>
        <IconButton
          size="sm"
          variant="text"
          className="!absolute right-3.5 top-3.5"
          onClick={tutup}
        >
          <XMarkIcon className="h-4 w-4 stroke-2" />
        </IconButton>
      </DialogHeader>

      <DialogBody className="space-y-4 pb-6">
        <Input
          color="gray"
          label="Nama Buku"
          size="lg"
          value={buku?.Nama_Buku || ""}
          readOnly
          className="placeholder:opacity-100"
        />

        <Input
          type="date"
          label="Tanggal Meminjam"
          color="gray"
          size="lg"
          value={tanggalPinjam}
          onChange={(e) => setTanggalPinjam(e.target.value)}
          className="placeholder:opacity-100"
        />

        <Input
          type="number"
          label="Lama Meminjam (hari)"
          color="gray"
          size="lg"
          value={lamaMeminjam}
          onChange={(e) => setLamaMeminjam(e.target.value)}
          className="placeholder:opacity-100"
        />
      </DialogBody>

      <DialogFooter>
        <Button
          className="ml-auto bg-teal-600"
          onClick={handleSubmit}
          disabled={sedangMemuat}
        >
          {sedangMemuat ? "Meminjam..." : "Pinjam Buku"}
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default ModalPinjamBuku;
