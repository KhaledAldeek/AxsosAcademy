import React from 'react';
import './App.css'
import ProfileCard from "./components/ProfileCard.jsx";

function App() {

  return (
    <>
        <ProfileCard fname={"Khaled"} lname={"Aldeek"} age={22} hairColor={"Brown"}/>
        <ProfileCard fname={"Khalil"} lname={"Ibrahim"} age={31} hairColor={"Black"}/>
    </>
  )
}

export default App
