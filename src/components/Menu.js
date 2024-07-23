import {NavLink} from "react-router-dom";

function Menu() {
    return (
        <nav>
            <NavLink
                className={(props) => {
                    console.log(props)
                    return props.isActive ? "activeLink" : 'link'
                }}

                to="."
                end
            >Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="contacts">Contacts</NavLink>
        </nav>
    )
}

export default Menu