import React, {useEffect, useState} from 'react';
import axios from "axios";
// import {createLogger} from "rolldown-vite";
import {Link} from 'react-router-dom'

const Authors = () => {

    const [authors, setAuthors] = useState([]);

    const getAllAuthors = async () => {
        try {
            const apiAuthors = await axios.get("http://localhost:8008/api/authors");
            setAuthors(apiAuthors.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllAuthors();
    }, []);

    const handleDelete = async (e, id) => {
        e.preventDefault();
        try{
            await axios.delete("http://localhost:8008/api/delete/"+id);
            getAllAuthors()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div >
            <h2>Favourite Author</h2>
            <Link to={"/authors/new"} className={"text-blue-500 underline"} >add an author</Link>

            <table style={{margin:"10px auto"}} className="border w-full max-w-2xl">
                <thead>
                <tr className="border-b" >
                    <th className="border p-2 text-left" >Author Name</th>
                    <th className="border p-2 text-left" >Actions Available</th>
                </tr>
                </thead>

                <tbody>
                {authors.map((author) => (
                    <tr key={author._id} className="border-b">
                        <td className="border p-2">
                            <p to={`/authors/${author._id}`} >
                                {author.name}
                            </p>
                        </td>

                        <td className="border p-2">
                            <div className="flex gap-2">
                                <Link to={`/authors/edit/${author._id}`}>
                                    <button type="button" className="border px-3 py-1">
                                        Edit
                                    </button>
                                </Link>

                                <button
                                    type="button"
                                    className="border px-3 py-1"
                                    onClick={(e) => handleDelete(e, author._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    );
};

export default Authors;