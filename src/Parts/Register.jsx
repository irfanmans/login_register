import React, { useState } from "react";
import Button from "../Components/Button/Button";
import Label from "../Components/Label/Label";
import Input from "../Components/Input/Input";
import { Link } from "react-router-dom";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmitRegister = (event) => {
        event.preventDefault();
        if (username === "" && email === "" && password === "") {
            alert("Tolong semua field di isi");
        } else {
            localStorage.setItem("username", username);
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            window.location.href = "/";
        }
    };

    return (
        <>
            <div className="border w-[30%] mx-auto p-10 mt-28 rounded-lg font-poppins shadow-lg">
                <div className="text-center font-bold text-3xl mb-14">
                    <h1 className="font-sans">Form Register</h1>
                </div>
                <form action="" onSubmit={handleSubmitRegister}>
                    <div className="flex flex-col">
                        <Label htmlFor="username" className="mb-2">
                            Username
                        </Label>
                        <Input type="text" name="username" id="username" placeholder="Masukkan Username" className="border p-2 rounded-xl" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="flex flex-col mt-5">
                        <Label htmlFor="email" className="mb-2">
                            Email
                        </Label>
                        <Input type="email" name="email" id="email" placeholder="Masukkan Email" className="border p-2 rounded-xl" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="flex flex-col mt-5">
                        <Label htmlFor="password" className="mb-2">
                            Password
                        </Label>
                        <Input type="password" name="password" id="password" placeholder="Masukkan Password" className="border p-2 rounded-xl" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <Button type="submit" className="font-semibold text-white rounded-xl p-2 bg-yellow-400 w-full mt-5">
                        Register
                    </Button>
                    <div className="mt-5 text-center">
                        <p className="text-sm">
                            Already have an account?{" "}
                            <Link to="/" className="text-indigo-500">
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
}
