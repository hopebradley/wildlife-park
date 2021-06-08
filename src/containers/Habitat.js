import Animal from '../components/Animal'

const Habitat = (props) => {

    const habitat = props.habitat

    const activeAnimals = props.animals.filter(a => a.habitat_id == habitat.id && a.active == true)

    return (
        <div id="habitat">
            <h1>{habitat.name}</h1>
            <h2>Active Animals:</h2>
            {activeAnimals.map(a => <Animal animal={a} habitat={habitat.name}/>)}
            <button className="button delete" onClick={props.delete}>Delete Habitat</button>
        </div>
    )
}

export default Habitat
