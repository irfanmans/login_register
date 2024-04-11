import Label from "../Components/Label/Label";
import Input from "../Components/Input/Input";
import Button from "../Components/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmitLogin = (event) => {
        event.preventDefault();

        const dataKeyStorageUsername = localStorage.getItem("username");
        const dataKeyStoragePassword = localStorage.getItem("password");

        if (username === dataKeyStorageUsername && password === dataKeyStoragePassword) {
            alert(`Selamat Datang ${username}`);
            window.location.href = "/home";
        } else {
            alert("Username atau Password salah");
        }
    };

    return (
        <div className="border w-[30%] mx-auto p-10 mt-28 rounded-lg font-poppins shadow-lg">
            <div className="text-center font-bold text-3xl mb-14">
                <h1 className="">Form Login</h1>
            </div>
            <form action="" onSubmit={handleSubmitLogin}>
                <div className="flex flex-col">
                    <Label htmlFor="username" className="mb-2">
                        Username
                    </Label>
                    <Input type="text" name="username" id="username" placeholder="Masukkan Username" className="border p-2 rounded-xl" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="flex flex-col mt-5">
                    <Label htmlFor="password" className="mb-2">
                        Password
                    </Label>
                    <Input type="password" name="password" id="password" placeholder="Masukkan Password" className="border p-2 rounded-xl" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="flex mt-5 justify-between">
                    <div className="flex gap-2">
                        <input type="checkbox" name="" id="" />
                        <p className="font-light text-sm">Remember me</p>
                    </div>
                    <div className="font-light">
                        <a href="#" className="text-sm">
                            Forgot Password
                        </a>
                    </div>
                </div>
                <Button type="submit" className="font-semibold text-white p-2 w-full bg-yellow-400 mt-5 rounded-xl">
                    Login
                </Button>
                <div className="mt-5 text-center">
                    <p className="text-sm">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-indigo-500">
                            Create your account
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
}
