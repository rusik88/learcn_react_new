import BookFilter from "./components/BookFilter/BookFilter";
import BookList from "./components/BookList/BookList";
import BookForm from "./components/BookForm/BookForm";
import './App.css';

function App() {
  return (
    <div className="app">
        <header className="app-header">
            <h1>Library book app</h1>
        </header>
        <main className="app-main">
            <div className="app-left-column">
                <BookForm />
            </div>
            <div className="app-right-column">
                <BookFilter />
                <BookList />
            </div>
        </main>
    </div>
  );
}

export default App;
