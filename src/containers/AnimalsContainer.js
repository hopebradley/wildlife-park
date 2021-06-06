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
        if (value == "Name (A-Z)") {
            newAnimalOrder = this.state.animals.sort((a, b) => (a.name > b.name) ? 1 : -1 ); 
        }
        else if (value == "Activity") {
            newAnimalOrder = this.state.animals.sort((a, b) => (a.active < b.active) ? 1 : -1 ); 
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
                                <option>Name (A-Z)</option>
                                <option>Activity</option>
                        </select>
                        <input type="submit"/>
                    </form>
                </div>
                {this.state.animals.map(a => {
                    const h = this.props.habitats.find(h => h.id == a.habitat_id).name;
                    return <Animal animal={a} habitat={h}/>
                })}
            </div>
        )

    }

}

export default AnimalsContainer