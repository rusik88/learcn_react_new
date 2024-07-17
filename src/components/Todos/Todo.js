import styles from "./Todo.module.css"
import TodoButtons from "./TodoButtons";

function Todo(props) {
    const {todo, handleDeleteTodoById, handleCheckTodoById} = props
    console.log('Todo component', todo)
    return (
        <div className={todo.status ? `${styles.todo} ${styles.check}` : styles.todo}>
            <div className={styles.todoText}>
                <span>{todo.name}</span>
                <TodoButtons
                    id={todo.id}
                    status={todo.status}
                    handleDeleteTodoById={handleDeleteTodoById}
                    handleCheckTodoById={handleCheckTodoById}
                />
            </div>
        </div>
    )
}

export default Todo