
const Animal = (props) => {

    const animal = props.animal;

    return (
        <div>
            <h3>{animal.name} - {animal.species}</h3>
        </div>
    )
}

export default Animal