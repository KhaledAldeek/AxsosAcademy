import React, {useState} from "react";

const UserValidation = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirm, setConfirm] = useState("");
    const [confirmError, setConfirmError] = useState("");

    const validateFirstName = (e) => {
        const fName = e.target.value;
        setFirstName(fName);
        // (__Malek_Ibdah___) -> (Malek_Ibdah)     -> .trim()
        if(fName.trim().length < 5){
            setFirstNameError("The First Name must be at least 5 characters long");
        }else{
            setFirstNameError("");
        }
    }



    const validateLastName = (e) => {
        const lName = e.target.value;
        setLastName(lName);
        if(lName.trim().length < 5){
            setLastNameError("The Last Name must be at least 5 characters long");
        }else{
            setLastNameError("");
        }
    }

    const validateEmail = (e) => {
        const EMAIL = e.target.value;
        setEmail(EMAIL);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(EMAIL)){
            setEmailError("Please enter a valid email");
        }else{
            setEmailError("");
        }
    }

    const validatePassword = (e) => {
        const PASSWORD = e.target.value;
        setPassword(PASSWORD);
        if(PASSWORD.length < 7){
            setPasswordError("Password must be at least 8 characters long");
        }else{
            setPasswordError("");
        }
    }
    const validateConfirm = (e) => {
        const CONFIRM_PASSWORD = e.target.value;
        setConfirm(CONFIRM_PASSWORD);
        if(!(CONFIRM_PASSWORD === password)) {
            setConfirmError("Passwords must match");
        }else{
            setConfirmError("");
        }
    }

    return (
        <>
            <form style={{display: "flex", flexDirection: "column", width: "100%"}}>
                <label>First Name: </label>
                <input type={"text"} value={firstName} onChange={validateFirstName} style={{width:'400px'}} />
                <p style={{color:"red"}}>{firstNameError}</p>
                <label>Last Name: </label>
                <input type={"text"} value={lastName} onChange={validateLastName} style={{width:'400px'}}/>
                <p style={{color:"red"}}>{lastNameError}</p>
                <label>Email: </label>
                <input type={"text"} value={email} onChange={validateEmail} style={{width:'400px'}}/>
                <p style={{color:"red"}}>{emailError}</p>
                <label>Password: </label>
                <input type={"text"} value={password} onChange={validatePassword} style={{width:'400px'}}/>
                <p style={{color:"red"}}>{passwordError}</p>
                <p style={{color:"red"}}>{confirmError}</p>
                <label>Confirm Password: </label>
                <input type={"text"} value={confirm} onChange={validateConfirm} style={{width:'400px'}}/>
            </form>
        </>
    )
}


export default UserValidation;