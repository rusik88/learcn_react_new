import Todo from "./Todo";

function TodoList(props) {
    const {todos, handleDeleteTodoById, handleCheckTodoById} = props
    return (
        <div className="TodoList">
            {todos.length === 0 ?
                (<h3>Todos is empty</h3>) :
                todos.map((todo, index) => {
                    return (<Todo
                        key={index}
                        todo={todo}
                        handleDeleteTodoById={handleDeleteTodoById}
                        handleCheckTodoById={handleCheckTodoById}
                    />)
                })
            }
        </div>
    )
}

export default TodoList