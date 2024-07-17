import TodoForm from "./TodoForm";
import styles from "./TodoMain.module.css"
import TodoList from "./Todos/TodoList";
import {useState} from "react";
import TodoButtonPanel from "./TodoButtonPanel";
import { v4 as uuidv4 } from 'uuid';

function TodoMain() {
    const [todos, setTodos] = useState([])

    const handleAddTodos = (todo) => {
        setTodos([...todos, {
            id: uuidv4(),
            name: todo,
            status: false
        }])
    }

    const handleDeleteTodoById = (id) => {
        let copy = Object.assign([], todos);
        const todoArr = copy.filter((item) => {
            return item.id !== id
        })
        setTodos(todoArr)
    }

    const handleDeleteByCheck = () => {
        let copy = Object.assign([], todos);
        const todoArr = copy.filter((item) => item.status === false)
        setTodos(todoArr)
    }

    const handleResetAllTodos = () => {
        setTodos([])
    }

    const handleCheckTodoById = (id) => {
        console.log('Lets check todo: ', id)
        let copy = Object.assign([], todos);
        const todoArr = copy.map((item) => {
            if(item.id === id) item.status = !item.status
            return item
        })
        setTodos(todoArr)
    }

    const handleCountTodos = () => {
        const countTodos = todos.filter((item) => item.status === true)
        return countTodos.length
    }

    return (
        <div className={styles.TodoWrap}>
            <h1>Todo App</h1>
            <TodoForm addTodo={handleAddTodos} />
            {todos.length > 0 && (
                <TodoButtonPanel
                    handleCountTodos={handleCountTodos}
                    handleDeleteByCheck={handleDeleteByCheck}
                    handleResetAllTodos={handleResetAllTodos}
                />
            )}
            <TodoList
                todos={todos}
                handleDeleteTodoById={handleDeleteTodoById}
                handleCheckTodoById={handleCheckTodoById}
            />
            {handleCountTodos() > 0 &&
                <div className={styles.todosCount}>
                    {`You have completed ${handleCountTodos()} todo`}
                    {handleCountTodos() > 1 ? 's' : ''}
                </div>
            }
        </div>
    )
}

export default TodoMain