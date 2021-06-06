import { render } from '@testing-library/react';
import React from 'react';
import Habitat from './Habitat'

class HabitatsContainer extends React.Component {

    state = {
        habitats: this.props.habitats
    }

    render() {
        return (
            <div>
                <button className="button">Create A New Habitat!</button>
                {this.state.habitats.map(h => <Habitat habitat={h} animals={props.animals} />)}
            </div>
        )
    }
    
}

export default HabitatsContainer