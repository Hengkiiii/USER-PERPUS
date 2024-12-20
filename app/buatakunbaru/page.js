"use client";

import React from "react";
import Konten from '@/app/buatakunbaru/components/konten';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Page() {
    return (
        <div>
            <ToastContainer />
            <Konten />
        </div>
    );
}
export default Page;