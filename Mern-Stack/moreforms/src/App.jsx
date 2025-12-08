import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserValidation from "./UserValidation.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <UserValidation/>
    </>
  )
}

export default App
