import './App.css';
import React from 'react';
import NavBar from './components/NavBar'
import HabitatsContainer from './containers/HabitatsContainer'
import AnimalsContainer from './containers/AnimalsContainer'
import AnimalForm from './components/AnimalForm'
import HabitatForm from './components/HabitatForm'
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

  // addAnimal = (e) => {
  //   e.preventDefault();
  //   console.log(Array.from(e.target.children));
  //   const formContents = Array.from(e.target.children);
  //   const name = formContents[1].value;
  //   const species = formContents[3].value;
  //   const habitat = this.state.habitats.find(h => h.name = formContents[5].value);
  //   const active = true;

  //   console.log(name, species, habitat, active);

  //   const configObject = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify({
  //       name: name,
  //       species: species,
  //       active: true,
  //       habitat_id: habitat.id,
  //     })
  //   }

  //   fetch('http://localhost:9292/animals', configObject)
  //   .then(resp => resp.json())
  //   .then((data) => {
  //     const newAnimals = [...this.state.animals];
  //     this.setState({
  //       animals: newAnimals
  //     })
  //   });

  // }

  // addHabitat = (e) => {

  // }
  
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={(props) => (
            <HomePage />
          )}/>
          <Route exact path="/habitats" render={(props) => (
            <HabitatsContainer habitats={this.state.habitats} animals={this.state.animals}/>
          )}/>

          <Route exact path="/animals" render={(props) => (
            <AnimalsContainer addAnimal={this.addAnimal} animals={this.state.animals} habitats={this.state.habitats} />
          )}/>
          
          <Route exact path="/add-animal" render={(props) => (
            <AnimalForm addAnimal={this.addAnimal}/>
          )}/>

          <Route exact path="/add-habitat" render={(props) => (
            <HabitatForm addHabitat={this.addHabitat} />
          )}/>

        </div>
      </Router>
    )
  }

}

export default App;
