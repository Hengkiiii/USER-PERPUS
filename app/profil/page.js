"use client";

import React, { useState } from "react";
import { AiOutlineUser, AiOutlineMail, AiOutlineBook } from "react-icons/ai";
import { Typography, Card, CardBody } from "@material-tailwind/react";

function AkunPage() {
    const [user] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
        prodi: "Informatics",
        profilePicture: "https://via.placeholder.com/150",
    });

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-6">
            <Card className="w-full sm:w-96 bg-gradient-to-tr from-teal-600 to-teal-900 shadow-lg rounded-xl transform transition-all hover:scale-105">
                <CardBody className="flex flex-col items-center p-8 text-white">
                    <img
                        src={user.profilePicture}
                        alt="User Profile"
                        className="w-32 h-32 rounded-full border-4 border-white mb-6 shadow-xl transition-transform transform hover:scale-110"
                    />
                    <Typography variant="h4" color="white" className="font-semibold mb-6 text-center">
                        Profil Pengguna
                    </Typography>

                    <div className="space-y-4 w-full">
                        <div className="flex items-center space-x-4 bg-teal-800 p-4 rounded-xl shadow-md">
                            <AiOutlineUser size={30} color="#ffffff" />
                            <div className="flex flex-col w-full">
                                <Typography variant="body2" color="gray-200">Nama Lengkap</Typography>
                                <Typography variant="h6" color="white">{user.name}</Typography>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 bg-teal-800 p-4 rounded-xl shadow-md">
                            <AiOutlineBook size={30} color="#ffffff" />
                            <div className="flex flex-col w-full">
                                <Typography variant="body2" color="gray-200">Program Studi</Typography>
                                <Typography variant="h6" color="white">{user.prodi}</Typography>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 bg-teal-800 p-4 rounded-xl shadow-md">
                            <AiOutlineMail size={30} color="#ffffff" />
                            <div className="flex flex-col w-full">
                                <Typography variant="body2" color="gray-200">Email</Typography>
                                <Typography variant="h6" color="white">{user.email}</Typography>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default AkunPage;
