
const Animal = (props) => {

    const animal = props.animal;

    let active_style = "";

    animal.active ? active_style = "active-animal" : active_style = "inactive-animal"

    return (
        <div className="animal" id={active_style}>
            <h3>{animal.name} - {animal.species}</h3>
            <p>{animal.active ? "Active" : "Inactive"}</p>
        </div>
    )
}

export default Animal