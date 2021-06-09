
const Animal = (props) => {

    const animal = props.animal;
    const habitat = props.habitat;

    let className = "";

    animal.active ? className = "animal active-animal" : className = "animal inactive-animal"

    return (
        <div className={className} id={animal.id}>
            <h3>{animal.name} - {animal.species}</h3>
            <p>{animal.active ? "Active" : "Inactive"}</p>
            <p>Habitat: {habitat}</p>
            <button className="button delete" onClick={props.deleteAnimal}>Delete Animal</button>
        </div>
    )
}

export default Animal