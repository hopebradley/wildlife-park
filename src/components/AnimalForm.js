
const AnimalForm = (props) => {

    return (
        <div>
            <h1 id="form-title">Add an Animal:</h1>
            <form onSubmit={props.addAnimal} className="form">
                <h3>Name</h3>
                <input type="text" placeholder="Jane..."></input>
                <h3>Species</h3>
                <input type="text" placeholder="Horse..."></input>
                <h3>Habitat</h3>
                <select>
                    <option>Arctic Mountains</option>
                    <option>African Savannah</option>
                    <option>Amazon Rainforest</option>
                    <option>Deep Ocean</option>
                    <option>Rapid River</option>
                    <option>Insect Emporium</option>
                </select>
                <br></br>
                <br></br>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default AnimalForm;