import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";
import Main from "./components/layouts/Main";
import Courses from "./components/learn/Courses";
import Course from "./components/learn/Course";

function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />}>
                        <Route element={<Home />} index={true} />
                        <Route element={<About />} path="about" />
                        <Route element={<Contacts />} path="contacts" />
                        <Route element={<Courses />} path="courses" />
                        <Route element={<Course />} path="courses/:slug" />
                        <Route element={<NotFound />} path="*" />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
