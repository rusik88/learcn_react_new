import "./BookList.css"
import {useDispatch, useSelector} from "react-redux";
import {delBook, favouriteBook} from "../../redux/books/actionCreators";
import { BsBookmarkStar, BsBookmarkStarFill  } from "react-icons/bs";
import {selectTitleFilter, selectAuthorFilter, selectFavouriteFilter} from "../../redux/slices/FilterSlice";
import {replaceTextMark} from '../../utils/functions'

function BookList() {
    const books = useSelector((state) => state.books)
    const dispatch = useDispatch()
    const selectTitle = useSelector(selectTitleFilter)
    const selectAuthor = useSelector(selectAuthorFilter)
    const selectFavourite = useSelector(selectFavouriteFilter)

    const handleDelBook = (id) => {
        dispatch(delBook(id))
    }

    const handleFavourite = (id) => {
        dispatch(favouriteBook(id))
    }

    const filterBooks = books.filter((book) => {
        const statusBookTitle = book.title.toLowerCase().includes(selectTitle.toLowerCase())
        const statusBookAuthor = book.author.toLowerCase().includes(selectAuthor.toLowerCase())
        const statusBookFavourite = (selectFavourite ? book.favourite : true)

        return statusBookTitle && statusBookAuthor && statusBookFavourite
    })

    return (
        <div className="app-block book-list">
            <h2>Book List</h2>
            { books.length === 0 ?
                (<p>No books items</p>)
            : (
                <ul>
                    {filterBooks.map((book, i) => {
                        return (
                            <li key={book.id}>
                                <div className="book-info">
                                    {++i}. <span dangerouslySetInnerHTML={{__html: replaceTextMark(book.title, selectTitle)}}></span>
                                    <span> by </span>
                                    <strong dangerouslySetInnerHTML={{__html: replaceTextMark(book.author, selectAuthor)}}></strong>
                                </div>
                                <div onClick={() => handleFavourite(book.id)}>
                                    {book.favourite
                                        ? (<BsBookmarkStarFill className="star-icon" />)
                                        : (<BsBookmarkStar className="star-icon" />)}
                                </div>
                                <button
                                    className="book-actions"
                                    onClick={() => handleDelBook(book.id)}
                                >Delete</button>
                            </li>
                        )
                    })}
                </ul>
                )
            }
        </div>
    )
}

export default BookList