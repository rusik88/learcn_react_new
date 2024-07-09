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

  return (
    <div className="App">
      <Counter counter={counterState} />
        {texts.map((item, index) => {
            return <Button key={index} handleSetCounter = {handleSetCounter} text={item}/>
        })}
    </div>
  );
}

export default App;
