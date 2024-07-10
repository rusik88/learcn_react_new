function Person(props) {
    const { firstName, lastName, email, image } = props
    return (
        <div className="person">
            <div className="card">
                <img src={image} alt={firstName} />
                <h3>{firstName} {lastName}</h3>
                <h4>{email}</h4>
            </div>
        </div>
    )
}

export default Person