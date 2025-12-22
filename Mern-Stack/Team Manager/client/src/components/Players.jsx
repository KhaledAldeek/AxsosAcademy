import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function PlayersList() {
    const [players, setPlayers] = useState([
        { id: 1, name: "Alex Morgan", position: "Forward" },
        { id: 2, name: "Carli Lloyd", position: "Midfielder" },
        { id: 3, name: "Lionel Messi", position: "Forward" },
        { id: 4, name: "Neymar", position: "Forward" },
        { id: 5, name: "Zlatan Ibrahimovic", position: "Forward" },

        // duplicates just for testing scroll:
        { id: 6, name: "Alex Morgan", position: "Forward" },
        { id: 7, name: "Carli Lloyd", position: "Midfielder" },
        { id: 8, name: "Lionel Messi", position: "Forward" },
        { id: 9, name: "Neymar", position: "Forward" },
        { id: 10, name: "Zlatan Ibrahimovic", position: "Forward" },
    ]);

    const deletePlayer = (id, name) => {
        const ok = window.confirm(`Are you sure you want to remove ${name}?`);
        if (!ok) return;
        setPlayers((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <div className="mt-10 border-2 border-gray-800 p-3 max-w-4xl">
            <div className="mb-3 flex gap-3 text-blue-700 font-bold">
                <Link to="/" className="underline">
                    List
                </Link>
                <Link to="/players/new" className="underline">
                    Add Player
                </Link>
            </div>

            <div className="max-h-[60vh] overflow-y-auto">
                <table className="w-full border-collapse">
                    <thead className="sticky top-0 bg-gray-300">
                    <tr>
                        <th className="border border-gray-800 p-2 text-left">Team Name</th>
                        <th className="border border-gray-800 p-2 text-left">
                            Preferred Position
                        </th>
                        <th className="border border-gray-800 p-2 text-left">Actions</th>
                    </tr>
                    </thead>

                    <tbody>
                    {players.map((p, idx) => (
                        <tr key={p.id ?? idx} className={idx % 2 ? "bg-gray-100" : "bg-white"}>
                            <td className="border border-gray-800 p-2">
                                <span className="text-blue-700 underline">{p.name}</span>
                            </td>
                            <td className="border border-gray-800 p-2">{p.position}</td>
                            <td className="border border-gray-800 p-2">
                                <button
                                    onClick={() => deletePlayer(p.id, p.name)}
                                    className="bg-red-600 text-white font-bold px-4 py-1 border-2 border-black"
                                >
                                    DELETE
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
