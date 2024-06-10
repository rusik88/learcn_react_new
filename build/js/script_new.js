const App = ({ initialButtonText, initialButtonClassList }) => {
    const [buttonText, setButtonText] = React.useState(initialButtonText)
    const [buttonClass, setButtonClass] = React.useState(initialButtonClassList)

    const handleChangeButton = () => {
        setButtonText('Clicked on Button')
        setButtonClass(`${initialButtonClassList} active`)
    }

    return (
        <div className="wrapper">
            <button className={buttonClass} onClick={handleChangeButton}>{buttonText}</button>
        </div>
    )
}

const container = document.getElementById("app")
const root = ReactDOM.createRoot(container)
root.render(<App initialButtonText="Click Me!!!" initialButtonClassList="btn" />)