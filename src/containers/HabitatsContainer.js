//import { render } from '@testing-library/react';
import React from 'react';
import Habitat from './Habitat'
import HabitatForm from '../components/HabitatForm'
// import { Link } from 'react-router-dom';

class HabitatsContainer extends React.Component {

    state = {
        habitats: this.props.habitats
    }

    handleChange = (e) => {
        e.preventDefault();
        const select = e.target.children[0];
        const index = select.selectedIndex;
        const value = select[index].innerText;
        let newHabitatOrder;
        if (value === "Sort By Name (A-Z)") {
            newHabitatOrder = this.state.habitats.sort((a, b) => (a.name > b.name) ? 1 : -1 ); 
        }
        if (value === "Indoor - Outdoor") {
            newHabitatOrder = this.state.habitats.sort((a, b) => (a.indoor < b.indoor) ? 1 : -1 ); 
        }
        if (value === "Aquatic - Dry Land") {
            newHabitatOrder = this.state.habitats.sort((a, b) => (a.aquatic < b.aquatic) ? 1 : -1 ); 
        }
        else {
            newHabitatOrder = this.state.habitats;
        }
        this.setState({
            habitats: newHabitatOrder
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.habitats !== this.state.habitats) {
            this.setState({
                habitats: this.props.habitats
            }) 
        }
      }

    render() {
        return (
            <div>
                {/* <button className="button"><Link to="/add-habitat">Add A Habitat</Link></button> */}
                <div className="sort">
                    <h3>FILTER:</h3>
                    <form onSubmit={this.handleChange}>
                        <select>
                                <option>Sort By Name (A-Z)</option>
                                <option>Indoor - Outdoor</option>
                                <option>Aquatic - Dry Land</option>
                        </select>
                        <input type="submit"/>
                    </form>
                </div>
                {this.state.habitats.map(h => <Habitat key={h.id} habitat={h} animals={this.props.animals} addAnimal={this.props.addAnimal} deleteAnimal={this.props.deleteAnimal} deleteHabitat={this.props.deleteHabitat} />)}
                <HabitatForm addHabitat={this.props.addHabitat} />
            </div>
        )
    }
    
}

export default HabitatsContainer