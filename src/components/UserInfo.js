import UserContext from "../contexts/UserContext";

function UserInfo() {
    return (
        <UserContext.Consumer>
            { (value) => {
                return (
                <h1>{value}</h1>
            )}}
        </UserContext.Consumer>
    )
}

export default UserInfo