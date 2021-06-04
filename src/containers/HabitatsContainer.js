import React from 'react';
import Habitat from './Habitat'

const HabitatsContainer = (props) => {

    const habitats = props.habitats

    return (
        <div>
            {habitats.map(h => <Habitat habitat={h} animals={props.animals} />)}
        </div>
    )
}

export default HabitatsContainer