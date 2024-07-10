function Login() {
    const handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.password.value)
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <label><span>Login</span>
                <input name="login" type="text" />
            </label>
            <label><span>Password</span>
                <input name="password" type="password" />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Login