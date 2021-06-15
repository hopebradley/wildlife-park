import Animal from '../components/Animal';
import AnimalForm from '../components/AnimalForm'

const Habitat = (props) => {

    const habitat = props.habitat

    const activeAnimals = props.animals.filter(a => a.habitat_id === habitat.id)

    let isIndoor;
    let isAquatic;

    habitat.indoor ? isIndoor = "Indoor" : isIndoor = "Outdoor";
    habitat.aquatic ? isAquatic = "Aquatic" : isAquatic = "Dry Land";

    return (
        <div className="habitat" id={habitat.id}>
            <h1>{habitat.name}</h1>
            <p>{isIndoor} - {isAquatic}</p>
            <h2>Active Animals:</h2>
            {activeAnimals.map(a => <Animal key={a.id} animal={a} habitat={habitat.name} deleteAnimal={props.deleteAnimal}/>)}
            <AnimalForm addAnimal={props.addAnimal} habitat={habitat}/>
            <button className="button delete" onClick={props.deleteHabitat}>Delete Habitat</button>
        </div>
    )
}

export default Habitat