import './App.css';
import {useEffect, useState} from "react";


function App() {
    const [todo, setTodo] = useState(null)
    const [status, setStatus] = useState(false)

    useEffect(() => {
        if(status !== false) {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then((res) => res.json())
                .then((data) => {
                    setTodo(data)
                })
        }
    }, [status])

    setTimeout(() => {
        if(status === false) {
            setStatus(true)
        }
    }, 2000)

    if(todo !== null) {
        console.log(todo)
    }


    return (
        <div className="App">
            {todo !== null &&
                (<h1>{todo.title}</h1>)
            }
        </div>
    );
}

export default App;
