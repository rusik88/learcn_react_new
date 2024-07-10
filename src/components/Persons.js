import persons from "../data/persons.json";
import Person from "./Person";

function Persons() {
    return (
        <div className="personsBlock">
            {persons.map((person) => {
                return <Person key={person.id} {...person} />
            })}
        </div>
    )
}
export default Persons