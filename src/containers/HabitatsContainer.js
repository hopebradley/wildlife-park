import { render } from '@testing-library/react';
import React from 'react';
import Habitat from './Habitat'

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
        if (value == "Sort By Name (A-Z)") {
            newHabitatOrder = this.state.habitats.sort((a, b) => (a.name > b.name) ? 1 : -1 ); 
        }
        else if (value == "Aquatic") {
            newHabitatOrder = this.state.habitats.filter((h) => h.aquatic); 
        }
        else if (value == "Indoor") {
            newHabitatOrder = this.state.habitats.filter((h) => h.indoor); 
        }
        else if (value == "Outdoor") {
            newHabitatOrder = this.state.habitats.filter((h) => !h.indoor); 
        }
        else {
            newHabitatOrder = this.state.habitats;
        }
        this.setState({
            habitats: newHabitatOrder
        })
    }

    render() {
        return (
            <div>
                <button className="button">Create A New Habitat!</button>
                <div className="sort">
                    <h3>FILTER:</h3>
                    <form onSubmit={this.handleChange}>
                        <select>
                                <option>Sort By Name (A-Z)</option>
                                <option>Aquatic</option>
                                <option>Indoor</option>
                                <option>Outdoor</option>
                        </select>
                        <input type="submit"/>
                    </form>
                </div>
                {this.state.habitats.map(h => <Habitat habitat={h} animals={this.props.animals} delete={this.props.delete} />)}
            </div>
        )
    }
    
}

export default HabitatsContainer