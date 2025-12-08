import './App.css'
import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import Main from "./components/Main.jsx";
import SubContent from "./components/SubContent.jsx";
import Advertisement from "./components/Advertisement.jsx";

function App() {

    return (
        <div className="bg-[#dddddd] h-[500px] w-[700px] flex flex-col items-center">
            <Header/>
            <div className="flex flex-row w-[98%] mt-3">
                <Navigation/>
                <Main>
                    <div className="flex w-full h-[65%] justify-around">
                        <SubContent/>
                        <SubContent/>
                        <SubContent/>
                    </div>
                    <Advertisement/>
                </Main>
            </div>
        </div>
    )
}

export default App
