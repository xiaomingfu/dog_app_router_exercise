import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import DogList from './DogList';
import Dog from './Dog';
import whiskey from './imgs/whiskey.jpg';
import tubby from './imgs/tubby.jpg';
import hazel from './imgs/hazel.jpg';

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }

  render() {
    //function
    const getDog = props => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <Dog {...props} dog={currentDog} />
    }
    let navbar = this.props.dogs.map(d => <li key={d.name}><NavLink to={`/dogs/${d.name}`} >{d.name}</NavLink></li>)
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Dog Shelter</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li><NavLink to="/dogs">Home</NavLink></li>
              {navbar}
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/dogs" render={() => <DogList dogs={this.props.dogs} />} />
          <Route exact path="/dogs/:name" render={getDog} />
          <Route render={() => <DogList />} />
        </Switch>
      </div>
    );
  }
}

export default App;
