import Animal from '../components/Animal'

const Habitat = (props) => {

    const habitat = props.habitat
    console.log(habitat)

    const animals = props.animals.filter(a => a.habitat_id == habitat.id)
    console.log(animals)


    return (
        <div>
            <h1>{habitat.name}</h1>
            {animals.map(a => <Animal animal={a} /> )}
        </div>
    )
}

export default Habitat
