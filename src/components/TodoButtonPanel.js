import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate, faTrash } from '@fortawesome/free-solid-svg-icons'
import styles from './TodoButtonPanel.module.css'

function TodoButtonPanel(props) {
    const { handleCountTodos, handleDeleteByCheck, handleResetAllTodos } = props


    return (
        <div className={styles.buttonPanel}>
            <button className="btn" onClick={handleResetAllTodos}><FontAwesomeIcon icon={faRotate} /></button>
            {handleCountTodos() > 0 &&
                <button className="btn" onClick={handleDeleteByCheck}><FontAwesomeIcon icon={faTrash} /></button>
            }
        </div>
    )
}

export default TodoButtonPanel;