import './App.css';
import React from 'react';
import NavBar from './components/NavBar'
import HabitatsContainer from './containers/HabitatsContainer'
import AnimalsContainer from './containers/AnimalsContainer'
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

    console.log(e);
    // e.preventDefault();
    // const formContents = Array.from(e.target.children);
    // const name = formContents[3].value;
    // const species = formContents[1].value;
    // const habitat = formContents[5].value;
    // let active;

    // const configObject = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   },
    //   body: JSON.stringify({
    //     name: name,
    //     species: species,
    //     habitat_id: habitat.id,
    //   })
    // }

    // fetch('http://localhost:9292/animals', configObject)
    // .then(resp => resp.json())
    // .then(data => {
    //   console.log(data);
    //   const newDisplay = [...this.state.displayClothes];
    //   newDisplay.unshift(data);
    //   newDisplay.pop();
    //   console.log(newDisplay);
    //   this.setState({
    //     displayClothes: newDisplay,
    //   })
    // })
    // .then(() => window.location.href = 'http://localhost:3000/animals');

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
            <HabitatsContainer habitats={this.state.habitats} animals={this.state.animals}/>
          )}/>

          <Route exact path="/animals" render={(props) => (
            <AnimalsContainer addAnimal={this.addAnimal} animals={this.state.animals}/>
          )}/>
          
        </div>
      </Router>
    )
  }

}

export default App;
