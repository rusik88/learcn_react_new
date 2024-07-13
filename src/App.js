import './App.css';
import Wrapper from "./components/Wrapper";


function App() {
    return (
        <div className="App">
            <Wrapper color="yellow">
                <h2>Text from children props</h2>
                <p>Text from children props 222</p>
            </Wrapper>
        </div>
    );
}

export default App;
