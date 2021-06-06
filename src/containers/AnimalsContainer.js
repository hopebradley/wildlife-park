import React from 'react';
import Animal from '../components/Animal'
import { Link } from 'react-router-dom'
import { render } from '@testing-library/react';

class AnimalsContainer extends React.Component {

    state = {
        animals: this.props.animals
    }

    handleChange = (e) => {
        e.preventDefault();
        const select = e.target.children[0];
        const index = select.selectedIndex;
        const value = select[index].innerText;
        let newAnimalOrder;
        if (value == "Sort By Name (A-Z)") {
            newAnimalOrder = this.state.animals.sort((a, b) => (a.name > b.name) ? 1 : -1 ); 
        }
        if (value == "Sort By Species (A-Z)") {
            newAnimalOrder = this.state.animals.sort((a, b) => (a.species > b.species) ? 1 : -1 ); 
        }
        else if (value == "Active") {
            newAnimalOrder = this.state.animals.filter((a) => a.active ); 
        }
        else if (value == "Inactive") {
            newAnimalOrder = this.state.animals.filter((a) => !a.active ); 
        }
        else {
            newAnimalOrder = this.state.animals;
        }
        this.setState({
            animals: newAnimalOrder
        })
    }

    render() {
        return (
            <div id="animals-container">
                {console.log(this.state.animals)}
                <button className="button"><Link to="/add-animal">Add An Animal</Link></button>
                <div className="sort">
                    <h3>SORT:</h3>
                    <form onSubmit={this.handleChange}>
                        <select>
                                <option>Sort By Name (A-Z)</option>
                                <option>Sort By Species (A-Z)</option>
                                <option>Active</option>
                                <option>Inactive</option>
                        </select>
                        <input type="submit"/>
                    </form>
                </div>
                {this.state.animals.map(a => {
                    const h = this.props.habitats.find(h => h.id == a.habitat_id).name;
                    return <Animal animal={a} habitat={h} delete={this.props.delete}/>
                })}
            </div>
        )

    }

}

export default AnimalsContainer