import React from 'react'

import './App.css'
import Tabs from "./components/Tabs.jsx";

function App() {
    const myTabs = [
        { label: "Tab 1", content: "This is tab 1 content" },
        { label: "Tab 2", content: "This is tab 2 content" },
        { label: "Tab 3", content: "This is tab 3 content" }
    ];
    return (
        <>
            <Tabs tabs={myTabs}/>
        </>
    )
}

export default App
