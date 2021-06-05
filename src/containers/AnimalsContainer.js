import React from 'react';
import Animal from '../components/Animal'
import { Link } from 'react-router-dom'

const AnimalsContainer = (props) => {

    const animals = props.animals

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target);
        // const selected = e.target.children[0].selectedIndex.value;
        // if (selected == "A-Z") {
        //     animals = animals.sort((a, b) => (a.name > b.name) ? 1 : -1 )
        //     this.render()
        // }
    }

    return (
        <div id="animals-container">
            <button className="button"><Link to="/add-animal">Add An Animal</Link></button>
            <div className="sort">
                <h3>SORT:</h3>
                <form onSubmit={handleChange}>
                    <select>
                            <option>A-Z</option>
                            <option>Activity</option>
                            <option>Habitat</option>
                    </select>
                    <input type="submit"/>
                </form>
                
            </div>
            {animals.map(a => {
                const h = props.habitats.find(h => h.id == a.habitat_id).name;
                return <Animal animal={a} habitat={h}/>
            })}
        </div>
    )
}

export default AnimalsContainer