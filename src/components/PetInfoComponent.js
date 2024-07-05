function PetInfoComponent(props) {
    const {animal, year} = props
    return (
        <h1>My {animal} is {year} years old</h1>
    )
}

export default PetInfoComponent