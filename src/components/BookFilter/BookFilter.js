import "./BookFilter.css"
import {useState} from "react";
import {setTitleFilter, setAuthorFilter, setFavouriteFilter, resetFilter} from "../../redux/slices/FilterSlice";
import {useDispatch} from "react-redux";

function BookFilter() {
    const [filterText, setFilterText] = useState('')
    const [filterAuthor, setFilterAuthor] = useState('')
    const [filterFavourite, setFilterFavourite] = useState(false)
    const dispatch = useDispatch()

    const handleFilter = (text) => {
        dispatch(setTitleFilter(text))
        setFilterText(text)
    }

    const handleFilterAuthor = (text) => {
        dispatch(setAuthorFilter(text))
        setFilterAuthor(text)
    }

    const handleFilterFavourite = (status) => {
        dispatch(setFavouriteFilter(!filterFavourite))
        setFilterFavourite(!filterFavourite)
    }

    const handleResetFilter = () => {
        dispatch(resetFilter())
        setFilterText('')
        setFilterAuthor('')
    }

    return (
        <div className="app-block filter">
            <div className="filter-row">
                <div className="filter-group">
                    <input
                        type="text"
                        value={filterText}
                        onChange={(e) => handleFilter(e.target.value)}
                        placeholder="Filtered by..."
                    />
                </div>
                <div className="filter-group">
                    <input
                        type="text"
                        value={filterAuthor}
                        onChange={(e) => handleFilterAuthor(e.target.value)}
                        placeholder="Filtered by author..."
                    />
                </div>
                <div className="filter-group">
                    <label>
                        <input
                            type="checkbox"
                            checked={filterFavourite}
                            onChange={(e) => handleFilterFavourite(e.target.value)}
                        />
                        Only Favourite
                    </label>
                </div>
                <button onClick={handleResetFilter}>Reset filter</button>
            </div>
        </div>
    )
}

export default BookFilter