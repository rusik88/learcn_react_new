import {useState} from "react";

function Login() {
    const [data, setData] = useState({username: '', password: ''})

    const handleOnSubmit = (event) => {
        event.preventDefault()
        const userData = {username: data.username, password: data.password}
        console.log(userData)
    }

    const handleInputForm = (e, field) => {
        setData({ ...data, [field]: e.target.value })
    }

    return (
        <div className="loginForm">
            <h1>Login Form</h1>
            <form onSubmit={handleOnSubmit}>
                <label><span>Login</span>
                    <input
                        name="login"
                        value={data.username}
                        type="text"
                        onChange={(e) => handleInputForm(e, 'username')}
                    />
                </label>
                <label><span>Password</span>
                    <input
                        name="password"
                        value={data.password}
                        type="password"
                        onChange={(e) => handleInputForm(e, 'password')}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login