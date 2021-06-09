import Animal from '../components/Animal'

const Habitat = (props) => {

    const habitat = props.habitat

    const activeAnimals = props.animals.filter(a => a.habitat_id === habitat.id && a.active === true)

    return (
        <div className="habitat" id={habitat.id}>
            <h1>{habitat.name}</h1>
            <h2>Active Animals:</h2>
            {activeAnimals.map(a => <Animal key={a.id} animal={a} habitat={habitat.name} deleteAnimal={props.deleteAnimal}/>)}
            <button className="button delete" onClick={props.deleteHabitat}>Delete Habitat</button>
        </div>
    )
}

export default Habitat