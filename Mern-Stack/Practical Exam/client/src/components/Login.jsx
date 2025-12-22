// Login.jsx
import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = ({isLogged, setIsLogged}) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (isLogged) navigate("/home");
    }, [isLogged, navigate]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [generalErr, setGeneralErr] = useState("");
    const [loading, setLoading] = useState(false);

    const clearErrors = () => {
        setEmailErr("");
        setPasswordErr("");
        setGeneralErr("");
    };

    const inputClass = (hasErr) =>
        `w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-purple-500 ${
            hasErr ? "border-red-500" : "border-gray-300"
        }`;

    const handleSubmit = async (e) => {
        e.preventDefault();
        clearErrors();

        // if (!email.trim()) {
        //   setEmailErr("email is required");
        //   return;
        // }
        // if (!password) {
        //   setPasswordErr("password is required");
        //   return;
        // }

        setLoading(true);
        try {
            await axios.post("http://localhost:8008/api/login", { email, password });

            setEmail("");
            setPassword("");
            localStorage.setItem("isLogged", "true");
            setIsLogged(true)
            navigate("/home");
        } catch (err) {
            clearErrors();

            const status = err?.response?.status;
            const mapped = err?.response?.data?.errors;

            if (status === 422 && mapped && typeof mapped === "object") {
                if (mapped.email?.msg) setEmailErr(mapped.email.msg);
                if (mapped.password?.msg) setPasswordErr(mapped.password.msg);

                if (!mapped.email && !mapped.password) {
                    setGeneralErr("Validation error");
                }
                return;
            }

            setPasswordErr(err?.response?.data?.message || "Invalid email or password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-sm bg-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

            <form onSubmit={handleSubmit} className="space-y-2">
                <div>
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (emailErr) setEmailErr("");
                        }}
                        className={inputClass(!!emailErr)}
                        placeholder="example@gmail.com"
                    />
                    {emailErr && <p className="text-sm text-red-600 mt-1">{emailErr}</p>}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            if (passwordErr) setPasswordErr("");
                        }}
                        className={inputClass(!!passwordErr)}
                    />
                    {passwordErr && <p className="text-sm text-red-600 mt-1">{passwordErr}</p>}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full border border-purple-700 bg-purple-700 text-white rounded py-2 font-semibold
                     hover:bg-purple-800 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

                <p>
                    don't have an account ?{" "}
                    <Link to="/" className="underline text-blue-500">
                        register here
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
