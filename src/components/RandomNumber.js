import { useState } from "react";
import generateRandomNumber from "../utils/mathFunctions";

function RandomNumber(props) {
    const { maxNum } = props
    const [randomNum, setRandomNum] = useState(generateRandomNumber(maxNum))

    const handleRandleNum = () => {
        setRandomNum(generateRandomNumber(maxNum))
    }

    return (
        <div>
            <h1>{ randomNum }</h1>
            <button onClick={handleRandleNum}>Generate new number</button>
        </div>
    )
}

export default RandomNumber