import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Home = ({isLogged, setIsLogged}) => {
    const navigate = useNavigate();

    useEffect(() => {
        console.log(isLogged)
        if (!isLogged) navigate("/login");
    }, [isLogged, navigate]);

    const logout = () => {
        localStorage.setItem("isLogged", "false");
        setIsLogged(false)
        navigate("/login");
    };

    return (
        <div>
            <nav className="w-full border-b bg-white">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                    <Link to="/home" className="font-bold text-xl text-purple-700">
                        Home
                    </Link>

                    <button
                        onClick={logout}
                        className="border border-red-600 bg-red-600 text-white px-4 py-2 rounded font-semibold
                       hover:bg-red-700 transition"
                    >
                        Logout
                    </button>
                </div>
            </nav>

            <div className="max-w-6xl mx-auto px-4 py-6">
                {/* content */}
            </div>
        </div>
    );
};

export default Home;
