import Menu from "../Menu";
import {Outlet} from "react-router-dom";

function Main() {
    return (
        <>
            <Menu />
            <Outlet />
        </>
    )
}

export default Main