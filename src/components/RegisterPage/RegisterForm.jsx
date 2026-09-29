import { Link } from "react-router-dom";
import { useState } from "react";
import { apiRequest } from "../../apiClient";

function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState("");
    const [fail, setFail] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        setSuccess("");
        setFail("");

        try {
            const result = await apiRequest("/users", {
                method: "POST",
                body: {
                    username: email,
                    email,
                    password
                },
            });
            console.log("Register response:", result);
            setSuccess("Registration successful!");
            setTimeout(() => {
                window.location.href = "/login";
            }, 500);
        } catch (error) {
            console.error("Registration failed:", error);
            setFail("Registration failed. Please try again.");
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
            <div className="mb-6">
                <label className="block mb-2 text-lg">Date of birth</label>
                <input type="date" id="birthDate" name="birthDate" className="w-full border rounded-lg px-4 py-3" />
            </div>
            <p className="text-green-600 text-center mt-3">{success}</p>
            <p className="text-red-600 text-center mt-3">{fail}</p>
            <div className="mb-4 flex items-center gap-3">
                <input type="checkbox" className="h-5 w-5" />
                <label >I would like to receive personalized promotions</label>
            </div>
            <div className="mb-6 flex items-center gap-3">
                <input type="checkbox" className="h-5 w-5" />
                <label >I agree and accept the <span className="underline cursor-pointer">Terms and Conditions</span></label>
            </div>
            <button type="submit" className="btn-dark w-full uppercase mb-3">Create an Account</button>
            <Link to="/login"><button className="btn-light w-full uppercase">Back to Login</button></Link>
        </form>
    )
}

export default RegisterForm;