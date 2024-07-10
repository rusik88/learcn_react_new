function Button({handleSetCounter, text}) {
    return (
        <button onClick={handleSetCounter}>{text}</button>
    )
}

export default Button