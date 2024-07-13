function Wrapper(props) {
    console.log(props)
    return (
        <div style={{backgroundColor: props.color}}>
            <h1>Hello from Wrapper</h1>
            {props.children}
            <button>Click me!!!</button>
        </div>
    )
}

export default Wrapper