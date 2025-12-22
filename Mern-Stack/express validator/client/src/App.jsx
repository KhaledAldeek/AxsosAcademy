import { useState } from "react";
import axios from "axios";

function App() {
    const [name, setName] = useState("");
    const [person, setPerson] = useState(null);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // if (!name.trim()) {
        //     setError("Name is required");
        //     return;
        // }
        // if (name.trim().length < 2) {
        //     setError("Name must be at least 2 characters");
        //     return;
        // }

        setError("");

        try {
            const res = await axios.post("http://localhost:8008/api/create", {
                name: name.trim(),
            });
            setPerson(res.data);
            setName("");
        } catch (err) {
            setError(err.response?.data?.message);
        }
    };

    const handleCheck = (e) => {

    }

    return (
        <div style={{ maxWidth: 400, margin: "40px auto" }}>
            <form onSubmit={handleSubmit}>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    style={{ width: "100%", padding: 10 }}
                />
                {error && <p style={{ color: "red", marginTop: 8 }}>{error}</p>}

                <button type="submit" style={{ marginTop: 10, padding: "10px 16px" }}>
                    Create
                </button>
            </form>

            <form onSubmit={handleCheck}>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    style={{ width: "100%", padding: 10 }}
                />
                {error && <p style={{ color: "red", marginTop: 8 }}>{error}</p>}

                <button type="submit" style={{ marginTop: 10, padding: "10px 16px" }}>
                    Create
                </button>
            </form>
        </div>
    );
}

export default App;
