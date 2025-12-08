import React, {useState} from "react";

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    return (
        <>
            <form>
                <label>First Name: </label>
                <input type={"text"} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <br/>
                <br/>
                <label>Last Name: </label>
                <input type={"text"} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <br/>
                <br/>
                <label>Email: </label>
                <input type={"text"} value={email} onChange={(e) => setEmail(e.target.value)} />
                <br/>
                <br/>
                <label>Password: </label>
                <input type={"text"} value={password} onChange={(e) => setPassword(e.target.value)} />
                <br/>
                <br/>
                <label>Confirm Password: </label>
                <input type={"text"} value={confirm} onChange={(e) => setConfirm(e.target.value)} />
                <br/>
                <br/>
            </form>
            <h2>Your Form Data</h2>
            <br/>
            <br/>
            <h2>First Name : {firstName}</h2>
            <h2>Last Name : {lastName}</h2>
            <h2>Email: {email}</h2>
            <h2>Password : {password}</h2>
            <h2>Confirm Password : {confirm}</h2>
        </>
    )
}


export default UserForm;