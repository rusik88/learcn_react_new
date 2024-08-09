import "./App.css"
import { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
    const [users, setUsers] = useState([]);

    const onUserAdd = (user) => {
        setUsers([...users, user]);
    };

    return (
        <div className="App-container">
            <div>
                <UserForm onUserAdd={onUserAdd} />
                <hr />
                <UserList users={users} />
            </div>
        </div>
    );
}

export default App;
