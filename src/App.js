import './App.css';
import React from 'react';
import NavBar from './components/NavBar'
import Habitat from './containers/Habitat'
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

  const displayHabitats = this.state.habitats.map(h => <Habitat habitat={h} animals={this.state.animals} />)
  
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/habitats" render={(props) => (
            {displayHabitats}
          )}/>
        </div>
      </Router>
    )
  }

}

export default App;
