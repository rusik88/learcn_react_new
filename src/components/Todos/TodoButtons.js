import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import styles from './TodoButtons.module.css'

function TodoButtons(props) {
    const { id, status, handleDeleteTodoById, handleCheckTodoById } = props
    return (
        <div className={styles.todoButtons}>
            <button className="btn deleteBtn" onClick={() => handleDeleteTodoById(id)}><FontAwesomeIcon icon={faTrash} /></button>
            <button className={status ? `btn ${styles.active}` : 'btn'} onClick={() => handleCheckTodoById(id)}><FontAwesomeIcon icon={faCheck} /></button>
        </div>
    )
}

export default TodoButtons