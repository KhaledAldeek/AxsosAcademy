import React from 'react';

const Main = ({children}) => {
    return (
        <div className="bg-[#e06666] h-[370px] w-[70%] ml-3 flex flex-col items-center">
            {children}
        </div>
    )
}

export default Main;