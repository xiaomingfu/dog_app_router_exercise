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

    let navbar = this.props.dogs.map(d => <NavLink to={`/dogs/${d.name}`}>{d.name}</NavLink>)
    return (
      <div className="App">
        <div className="Navbar">
          {navbar}
        </div>
        <Switch>
          <Route exact path="/dogs" render={() => <DogList />} />
          <Route exact path="/dogs/:name" render={(routeProps) => <Dog name={routeProps} />} />
          <Route render={() => <DogList />} />
        </Switch>
      </div>
    );
  }
}

export default App;
