import './App.css'
import User from "./components/User";
import UserContext from "./contexts/UserContext";
import {useState} from "react";

function App() {
    const [user] = useState('Ruslan')
    return (
        <UserContext.Provider test="Test text" value={user}>
            <div className="App">
                <User />
            </div>
        </UserContext.Provider>
    );
}

export default App;
