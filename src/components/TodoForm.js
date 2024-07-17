import style from "./TodoForm.module.css"
import {useState} from "react";

function TodoForm(props) {
    const { addTodo } = props
    const [name, setName] = useState('')

    const handleOnSubmit = (event) => {
        event.preventDefault()
        setName('')
        if(name !== '' || name >= 3 ) {
            addTodo(name)
        }
    }

    return (
        <div className={style.TodoForm}>
            <form onSubmit={handleOnSubmit}>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter new Todo"
                />
                <button
                    disabled={name === '' || name.length < 3 ? 'disabled' : ''}
                >Submit</button>
            </form>
        </div>
    )
}

export default TodoForm