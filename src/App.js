import './App.css';
import Counter from "./components/Counter";
import Button from "./components/Button";
import {useState} from "react";

function App() {
  const [counterState, setCounterState] = useState(0)

  const handleSetCounter = () => {
        setCounterState(counterState + 1)
  }

  return (
    <div className="App">
      <Counter counter={counterState} />
      <Button handleSetCounter = {handleSetCounter}/>
      <Button handleSetCounter = {handleSetCounter}/>
      <Button handleSetCounter = {handleSetCounter}/>
      <Button handleSetCounter = {handleSetCounter}/>
    </div>
  );
}

export default App;
