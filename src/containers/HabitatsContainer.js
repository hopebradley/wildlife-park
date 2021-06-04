import React from 'react';
import Habitat from './Habitat'

const HabitatsContainer = (props) => {

    const habitats = props.habitats

    return (
        <div>
            <button className="button">Create A New Habitat!</button>
            {habitats.map(h => <Habitat habitat={h} animals={props.animals} />)}
        </div>
    )
}

export default HabitatsContainer