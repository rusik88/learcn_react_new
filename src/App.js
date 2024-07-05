import './App.css';
import PetInfoComponent from "./components/PetInfoComponent";

function App() {
  return (
    <div className="App">
      <PetInfoComponent animal="dog" year="3" />
      <PetInfoComponent animal="cat" year="7" />
    </div>
  );
}

export default App;
