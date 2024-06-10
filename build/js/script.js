
const App = ({ initialButtonText, initialButtonClassList }) => {
    const [buttonText, setButtonText] = React.useState(initialButtonText)
    const [buttonTextActive, setButtonTextActive] = React.useState(initialButtonClassList)
    console.log(buttonText)

    const changeTextFunc = () => {
        setButtonText('New Text')
        setButtonTextActive('btn active')
    }
    return (
        <div className="wrapper">
            <button id="my-btn" className={buttonTextActive} onClick={changeTextFunc}>{buttonText}</button>
        </div>
    )
}


const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App initialButtonText="Click Me !!!!" initialButtonClassList="btn" />)


