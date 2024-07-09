function Button(props) {
    const {handleSetCounter} = props

    return (
        <button onClick={handleSetCounter}>Click me!</button>
    )
}

export default Button