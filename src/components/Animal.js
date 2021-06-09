
const Animal = (props) => {

    const animal = props.animal;
    const habitat = props.habitat;

    let active_style = "";

    animal.active ? active_style = "active-animal" : active_style = "inactive-animal"

    return (
        <div className="animal" id={active_style}>
            <h3>{animal.name} - {animal.species}</h3>
            <p>{animal.active ? "Active" : "Inactive"}</p>
            <p>Habitat: {habitat}</p>
            <button className="button delete" onClick={props.deleteAnimal}>Delete Animal</button>
        </div>
    )
}

export default Animal