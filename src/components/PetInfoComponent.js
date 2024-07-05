function PetInfoComponent(props) {
    const {animal, year, hasPet} = props
    return (
        <h1>
            {hasPet
            ? (<>My {animal} is {year} years old</> )
            : (<>I don't have an animal</>)
            }
        </h1>
    )


}

export default PetInfoComponent