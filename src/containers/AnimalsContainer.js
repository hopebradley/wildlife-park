import React from 'react';
import Animal from '../components/Animal'

const AnimalsContainer = (props) => {

    const animals = props.animals

    return (
        <div id="animals-container">
            <button onClick={props.addAnimal} className="button">Create A New Animal!</button>
            {animals.map(a => <Animal animal={a} />)}
        </div>
    )
}

export default AnimalsContainer