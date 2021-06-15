
const HabitatForm = (props) => {

    return (
        <div>
            
            <form onSubmit={props.addHabitat} className="habitat-form form">
                <h1 id="form-title">Add a Habitat:</h1>
                <h3>Name</h3>
                <input type="text" placeholder="Sandy Coastline..."></input>
                <h3>Type</h3>
                <select>
                    <option>Aquatic</option>
                    <option>Dry Land</option>
                </select>
                <h3>Location</h3>
                <select>
                    <option>Indoor</option>
                    <option>Outdoor</option>
                </select>
                <br></br>
                <br></br>
                <input type="submit" value="Add"></input>
            </form>
        </div>
    )
}

export default HabitatForm;