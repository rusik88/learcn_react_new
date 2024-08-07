import "./BookForm.css"
import {useState} from "react";
import { useDispatch } from 'react-redux'
import { addBook, randomBook } from "../../redux/books/actionCreators";

function BookForm() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(title && author) {
            dispatch(addBook({title, author}))
            setTitle('')
            setAuthor('')
        }
        //Submit Form
    }

    const HandleRandomBook = () => {
        dispatch(randomBook())
    }

    return (
        <div className="app-block filter">
            <h2>Book Filter</h2>
            <form className="book-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input id="id" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="author">Author: </label>
                    <input id="author" name="author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                </div>
                <button type="submit">Add Book</button>
                <button onClick={HandleRandomBook}>Random Book</button>
            </form>
        </div>
    )
}

export default BookForm