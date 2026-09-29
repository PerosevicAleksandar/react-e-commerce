import { Link } from "react-router-dom";
import { apiRequest } from "../../apiClient";
import { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState("");
    const [fail, setFail] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        setSuccess("");
        setFail("");

        try {
            const result = await apiRequest("/auth/login", {
                method: "POST",
                body: {
                    username: email,
                    password,
                },
            });

            sessionStorage.setItem("isLoggedIn", true);
            sessionStorage.setItem("token", result.token);
            const users = await apiRequest("/users");
            const loggedUser = users.find((user) => user.email === email);
            sessionStorage.setItem("userId", loggedUser.id);
            setSuccess("Login successful!");
            setTimeout(() => {
                window.location.href = "/";
            }, 500);
        } catch (error) {
            console.error("Login failed:", error);
            setFail("Login failed. Please try again.");
        }
    }


    return (
        <form onSubmit={handleSubmit} className="max-w-xl w-full border border-secondary rounded-lg md:p-10 p-5">
            <div className="mb-5">
                <label className="block mb-2 text-lg">Email</label>
                <input type="email" value={email} className="w-full border rounded-lg px-4 py-3"
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-lg">Create a password</label>
                <input type="password" value={password} className="w-full border rounded-lg px-4 py-3"
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <p className="text-green-600">{success}</p>
            <p className="text-red-600">{fail}</p>
            <div className="flex justify-between my-4">
                <div className="flex items-center gap-1">
                    <input type="checkbox" className="h-5 w-5" />
                    <label>Remember me</label>
                </div>
                <p className="underline cursor-pointer text-secondary">Forgot Password?</p>
            </div>
            <button type="submit" className="btn-dark w-full uppercase mb-3">Login</button>
            <p className="text-center">Or <Link to="/register" className="underline">Create an Account</Link></p>
        </form>
    )
}

export default LoginForm;