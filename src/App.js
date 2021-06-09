import './App.css';
import React from 'react';
import NavBar from './components/NavBar'
import HabitatsContainer from './containers/HabitatsContainer'
import AnimalsContainer from './containers/AnimalsContainer'
// import AnimalForm from './components/AnimalForm'
// import HabitatForm from './components/HabitatForm'
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {

  state = {
    animals: [],
    habitats: []
  }

  componentDidMount() {
    fetch('http://localhost:9292/animals')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        animals: data
      })
    })
    .then(() => console.log(this.state.animals));

    fetch('http://localhost:9292/habitats')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        habitats: data
      })
    })
    .then(() => console.log(this.state.habitats));

  }

  addAnimal = (e) => {
    e.preventDefault();
    //console.log(Array.from(e.target.children));
    const formContents = Array.from(e.target.children);
    const name = formContents[1].value;
    const species = formContents[3].value;
    const habitat = this.state.habitats.find(h => h.name === formContents[5].value);
    const active = true;

    console.log('Animal attributes:', name, species, habitat, active);

    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        species: species,
        active: true,
        habitat_id: habitat.id,
      })
    }

    fetch('http://localhost:9292/animals', configObject)
    .then(resp => resp.json())
    .then((data) => {
      console.log('New Animal Data to be added to state: ', data)
      this.setState({
        animals: [...this.state.animals, data]
      });
    });

  }

  addHabitat = (e) => {
    e.preventDefault();
    console.log(Array.from(e.target.children));
    const formContents = Array.from(e.target.children);
    const name = formContents[1].value;
    const type = formContents[3].value;
    const location = formContents[5].value;
    let indoor;
    let aquatic;
    type === "Aquatic" ? aquatic = true : aquatic = false;
    location === "Indoor" ? indoor = true : indoor = false;

    console.log(name, type, location);

    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        aquatic: aquatic,
        indoor: indoor
      })
    }
    fetch('http://localhost:9292/habitats', configObject)
    .then(resp => {
      console.log(resp) 
      return resp.json()
    })
    .then((data) => {
      console.log(data)
      this.setState({
        habitats: [...this.state.habitats, data]
      })
    });
  }

  deleteAnimal = (e) => {
    console.log(e.target.parentElement.id)
    const IdOfAnimalToDelete = e.target.parentElement.id
    const URL = "http://localhost:9292/animals/" + IdOfAnimalToDelete
    const animal = this.state.animals.find(a => a.id == IdOfAnimalToDelete);
    const animalIndex = this.state.animals.indexOf(animal);
    console.log(URL);
    fetch(URL, {
      method: "DELETE"
    })
    .then(resp => console.log(resp))
    .then(() => {
      const newAnimals = this.state.animals;
      newAnimals.splice(animalIndex, 1);
      this.setState({
        animals: newAnimals
      })
    });
  }
  
  deleteHabitat = (e) => {
    console.log(e.target.parentElement.id)
    const IdOfHabitatToDelete = e.target.parentElement.id
    const URL = "http://localhost:9292/habitat/" + IdOfHabitatToDelete
    const habitat = this.state.habitats.find(h => h.id == IdOfHabitatToDelete);
    const habitatIndex = this.state.habitats.indexOf(habitat);
    console.log(URL);
    fetch(URL, {
      method: "DELETE"
    })
    .then(resp => console.log(resp))
    .then(() => {
      const newHabitats = this.state.habitats;
      newHabitats.splice(habitatIndex, 1);
      this.setState({
        habitats: newHabitats
      })
    });
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={(props) => (
            <HomePage />
          )}/>
          <Route exact path="/habitats" render={(props) => (
            <HabitatsContainer addHabitat={this.addHabitat} habitats={this.state.habitats} animals={this.state.animals} deleteAnimal={this.deleteAnimal} deleteHabitat={this.deleteHabitat}/>
          )}/>

          <Route exact path="/animals" render={(props) => (
            <AnimalsContainer addAnimal={this.addAnimal} animals={this.state.animals} habitats={this.state.habitats} deleteAnimal={this.deleteAnimal} />
          )}/>
          
          {/* <Route exact path="/add-animal" render={(props) => (
            <AnimalForm addAnimal={this.addAnimal}/>
          )}/>

          <Route exact path="/add-habitat" render={(props) => (
            <HabitatForm addHabitat={this.addHabitat} />
          )}/> */}

        </div>
      </Router>
    )
  }

}

export default App;
