import UserContext from "../contexts/UserContext";
import {useContext} from "react";

function UserInfo() {
    const name = useContext(UserContext)
    return (
        <h1>{name}</h1>
    )
}

export default UserInfo