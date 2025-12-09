import {useState} from "react";

const  Tabs = ({tabs}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!tabs || tabs.length === 0) return null;

    return (
        <div>
            <div>
                {tabs.map((tab, index) => (
                    <button key={index} onClick={() => setActiveIndex(index)}>{tab.label}</button>))}
            </div>
            <div>
                {tabs[activeIndex].content}
            </div>
        </div>);
}

export default Tabs;
