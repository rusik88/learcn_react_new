import './App.css';
import Counter from "./components/Counter";
import Button from "./components/Button";
import {useState} from "react";

function App() {
    const [counterState, setCounterState] = useState(0)
    const texts = ['Click me 1', 'Click me 2', 'Click me 3', 'Click me 4', 'Click me 5']

    const handleSetCounter = () => {
        setCounterState(counterState + 1)
    }

    const handleResetCounter = () => {
        setCounterState(0)
    }

    const styleButton = { backgroundColor: 'lightblue' }

    return (
        <div className="App">
            <Counter counter={counterState} />
            {texts.map((item, index) => {
                return <Button key={index} handleSetCounter = {handleSetCounter} text={item}/>
            })}

            { counterState > 0 && (
                <div className="resetButton">
                    <button style={styleButton} onClick={handleResetCounter}>Reset</button>
                </div>
            )}

            { counterState > 0 ? (
                <div className="resetButton">
                    <button style={styleButton} onClick={handleResetCounter}>Reset</button>
                </div>
            ) : (<></>)}

        </div>
    );
}

export default App;
