import './App.css'
import Info from "./components/Info";

function App() {
    return (
        <div className="App">
            <Info />
            <div className="info">
                <h1>Hello from Info component</h1>
                <button>Click me!!!</button>
            </div>
        </div>
    );
}

export default App;
