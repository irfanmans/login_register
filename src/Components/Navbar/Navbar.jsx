import React, { useState, useEffect } from "react";
import LogoNavbar from "/images/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState("");

    useEffect(() => {
        const storedUsername = localStorage.getItem("email");
        if (storedUsername) {
            setEmail(storedUsername);
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("email");
        setIsLoggedIn(false);
        setEmail("");
        window.location.href = "/";
    };

    return (
        <>
            <section className="flex justify-between shadow-md px-14 py-5">
                <div>
                    <img src={LogoNavbar} width={150} alt="logo_navbar" />
                </div>
                <div className="border p-2 rounded-full w-[30%]">
                    <input type="text" className="px-3 focus:outline-none" placeholder="Pencarian..." />
                </div>
                <div className="flex items-center gap-3">
                    {isLoggedIn ? (
                        <>
                            <p className="font-poppins">{email}</p>
                            <button onClick={handleLogout} className="rounded-xl border px-5 py-2">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="rounded-xl border px-5 py-2">
                                Login
                            </Link>
                            <Link to="/register" className="rounded-xl border px-5 py-2">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </section>
        </>
    );
}
