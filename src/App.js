import './App.css';
import PetInfoComponent from "./components/PetInfoComponent";

function App() {
  return (
    <div className="App">
      <PetInfoComponent animal="dog" year={3} hasPet={false} />
      <PetInfoComponent animal="cat" year={7} hasPet={true} />
    </div>
  );
}

export default App;
