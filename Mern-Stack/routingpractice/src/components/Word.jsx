import React from 'react';
import { useParams } from "react-router-dom";

function Word() {
    const { word, textColor, bgColor } = useParams();

    const isNumber = (string) => {
        console.log(string)
        return !isNaN(string);
    };

    return (
        <>
            { isNumber(word) ?
                (textColor && bgColor) ?
                    <h1 style={{
                        color: textColor,
                        backgroundColor: bgColor,
                        border: "4px solid #000000"
                    }}>
                        The Number is : {word}
                    </h1>
                    :
                    <h1>The Number is : {word}</h1>
                :
                (textColor && bgColor) ?
                    <h1 style={{
                        color: textColor,
                        backgroundColor: bgColor,
                        border: "4px solid #000000"
                    }}>
                        The Word is : {word}
                    </h1>
                    :
                    <h1>The Word is : {word}</h1>
            }
        </>
    );
}

export default Word;
