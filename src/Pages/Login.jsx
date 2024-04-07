import Label from "../Components/Label/Label";
import Input from "../Components/Input/Input";
import Button from "../Components/Button/Button";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="border w-[30%] mx-auto p-10 mt-40 rounded-lg font-poppins shadow-lg">
            <div className="text-center font-bold text-3xl mb-14">
                <h1 className="">Form Login</h1>
            </div>
            <form action="">
                <div className="flex flex-col">
                    <Label htmlFor="username" className="mb-2">
                        Username
                    </Label>
                    <Input type="text" name="username" id="username" placeholder="Masukkan Username" className="border p-2 rounded-xl" />
                </div>
                <div className="flex flex-col mt-5">
                    <Label htmlFor="password" className="mb-2">
                        Password
                    </Label>
                    <Input type="password" name="password" id="password" placeholder="Masukkan Password" className="border p-2 rounded-xl" />
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
                <div className="mt-7 text-center bg-orange-300 p-2 rounded-xl">
                    <Button className="font-semibold text-white">Login</Button>
                </div>
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
