import React from "react";

const ProfileCard = (props) => {
    const [age, setAge] = React.useState(props.age);
    const {fname: firstName, lname:lastName, hairColor} = props;

    const ageChange = () => {
        setAge(age + 1);
    }
    return (
        <>
            <h1>{lastName}, {firstName}</h1>
            <h2>Age: {age}</h2>
            <h2>hair color: {hairColor}</h2>
            <button onClick={ageChange}>Birthday Button for {firstName} {lastName}</button>
        </>
    )
}

export default ProfileCard;