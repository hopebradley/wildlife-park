
const AnimalForm = (props) => {

    return (
        <div>
            
            <form onSubmit={props.addAnimal} className="form" id={props.habitat.id}>
                <h3 id="form-title">Add Animal To Habitat:</h3>
                <p>Name</p>
                <input type="text" placeholder="Jane..."></input>
                <p>Species</p>
                <input type="text" placeholder="Horse..."></input>
                <p>Currently Active?</p>
                <select>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                <br></br>
                <br></br>
                <input type="submit" value="Add"></input>
            </form>
        </div>
    )
}

export default AnimalForm;