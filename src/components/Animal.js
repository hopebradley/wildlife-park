
const Animal = (props) => {

    const animalName = props.animal.name;

    return (
        <div>
            <h1>{animalName}</h1>
        </div>
    )
}

export default Animal