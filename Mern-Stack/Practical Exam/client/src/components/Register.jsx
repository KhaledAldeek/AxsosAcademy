import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register({isLogged, setIsLogged}) {
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogged) navigate("/home");
    }, [isLogged, navigate]);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [firstNameErr, setFirstNameErr] = useState("");
    const [lastNameErr, setLastNameErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [dateOfBirthErr, setDateOfBirthErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [confirmPasswordErr, setConfirmPasswordErr] = useState("");
    const [generalErr, setGeneralErr] = useState("");

    const [loading, setLoading] = useState(false);

    const clearErrors = () => {
        setFirstNameErr("");
        setLastNameErr("");
        setEmailErr("");
        setDateOfBirthErr("");
        setPasswordErr("");
        setConfirmPasswordErr("");
        setGeneralErr("");
    };

    const emptyFields = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setDateOfBirth("");
        setPassword("");
        setConfirmPassword("");
    };

    const inputClass = (hasErr) =>
        `w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-purple-500 ${
            hasErr ? "border-red-500" : "border-gray-300"
        }`;

    const validateFront = () => {
        let ok = true;

        const fn = firstName.trim();
        const ln = lastName.trim();
        const em = email.trim();

        if (!fn) {
            setFirstNameErr("firstName is required");
            ok = false;
        } else if (fn.length < 2) {
            setFirstNameErr("firstName must be at least 2 chars");
            ok = false;
        }

        if (!ln) {
            setLastNameErr("lastName is required");
            ok = false;
        } else if (ln.length < 2) {
            setLastNameErr("lastName must be at least 2 chars");
            ok = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!em) {
            setEmailErr("email is required");
            ok = false;
        } else if (!emailRegex.test(em)) {
            setEmailErr("please enter a valid email");
            ok = false;
        }

        if (!dateOfBirth) {
            setDateOfBirthErr("dateOfBirth is required");
            ok = false;
        } else {
            const selected = new Date(dateOfBirth);
            const today = new Date();
            selected.setHours(0, 0, 0, 0);
            today.setHours(0, 0, 0, 0);
            if (selected > today) {
                setDateOfBirthErr("dateOfBirth cannot be in the future");
                ok = false;
            }
        }

        if (!password) {
            setPasswordErr("password is required");
            ok = false;
        } else if (password.length < 8) {
            setPasswordErr("password must be at least 8 chars");
            ok = false;
        }

        if (!confirmPassword) {
            setConfirmPasswordErr("confirmPassword is required");
            ok = false;
        } else if (password !== confirmPassword) {
            setConfirmPasswordErr("Passwords do not match");
            ok = false;
        }

        return ok;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        clearErrors();

        const ok = validateFront();
        if (!ok) return;

        setLoading(true);
        try {
            await axios.post("http://localhost:8008/api/createUser", {
                firstName,
                lastName,
                email,
                dateOfBirth,
                password,
                confirmPassword,
            });

            emptyFields();
            setIsLogged(true)
            localStorage.setItem("isLogged", "true");
            navigate("/login");
        } catch (err) {
            clearErrors();

            const status = err?.response?.status;
            const mapped = err?.response?.data?.errors;

            if ((status === 422 || status === 409) && mapped && typeof mapped === "object") {
                if (mapped.firstName?.msg) setFirstNameErr(mapped.firstName.msg);
                if (mapped.lastName?.msg) setLastNameErr(mapped.lastName.msg);
                if (mapped.email?.msg) setEmailErr(mapped.email.msg);
                if (mapped.dateOfBirth?.msg) setDateOfBirthErr(mapped.dateOfBirth.msg);
                if (mapped.password?.msg) setPasswordErr(mapped.password.msg);
                if (mapped.confirmPassword?.msg) setConfirmPasswordErr(mapped.confirmPassword.msg);
                return;
            }

            setGeneralErr(err?.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-sm bg-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

            {generalErr && (
                <div className="border border-red-300 bg-red-50 text-red-700 p-3 rounded mb-4">
                    {generalErr}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-2">
                <div>
                    <label className="block mb-1 font-medium">First Name</label>
                    <input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className={inputClass(!!firstNameErr)}
                        placeholder="Your First Name:"
                    />
                    {firstNameErr && <p className="text-sm text-red-600 mt-1">{firstNameErr}</p>}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Last Name</label>
                    <input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className={inputClass(!!lastNameErr)}
                        placeholder="Your Last Name:"
                    />
                    {lastNameErr && <p className="text-sm text-red-600 mt-1">{lastNameErr}</p>}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputClass(!!emailErr)}
                        placeholder="example@gmail.com"
                    />
                    {emailErr && <p className="text-sm text-red-600 mt-1">{emailErr}</p>}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Date of Birth</label>
                    <input
                        type="date"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        max={new Date().toISOString().split("T")[0]}
                        className={inputClass(!!dateOfBirthErr)}
                    />
                    {dateOfBirthErr && <p className="text-sm text-red-600 mt-1">{dateOfBirthErr}</p>}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={inputClass(!!passwordErr)}
                    />
                    {passwordErr && <p className="text-sm text-red-600 mt-1">{passwordErr}</p>}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Confirm Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={inputClass(!!confirmPasswordErr)}
                    />
                    {confirmPasswordErr && (
                        <p className="text-sm text-red-600 mt-1">{confirmPasswordErr}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full border border-purple-700 bg-purple-700 text-white rounded py-2 font-semibold
                     hover:bg-purple-800 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {loading ? "Creating..." : "Create Account"}
                </button>

                <p>
                    Already have an account?{" "}
                    <Link to="/login" className="underline text-blue-500">
                        login here
                    </Link>
                </p>
            </form>
        </div>
    );
}
