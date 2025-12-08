import React from "react";

const Nav = () => {
    const [divs, setDivs] = React.useState([]);
    const [color, setColor] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setDivs([...divs, color]);

        setColor("");

        // const arr = str.split(",");
    }

    const addColor = (e) => {

            const newColor = (e.target.value);
            setColor(newColor);

        // const str = e.target.value;
        // console.log(str);
    }

    return (
        <>
            <nav className={"w-[70%] h-20  flex justify-between items-center"}>
                <h1 className={"text-center"}>Color</h1>
                <form className={"w-1/1 h-1/1 flex justify-around items-center"} onSubmit={handleSubmit}>
                    <input type={"text"} value={color} className={"border-3 w-[50%] h-1/2 pl-2"} onChange={addColor} />
                    <input type={"submit"} className={"border-3 w-[10%] h-1/2"} />
                </form>
            </nav>

            <div className={"w-full h-[86vh] flex justify-start items-start gap-[5%] flex-wrap"}>
                { divs.map( (color, i) => <div key={i} style={{backgroundColor :color}} className={`w-[10%] h-[20%]`}></div> ) }
            </div>
        </>
    );
}

export default Nav;