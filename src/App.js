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

    let navbar = this.props.dogs.map(d => <li><NavLink to={`/dogs/${d.name}`}>{d.name}</NavLink></li>)
    return (
      <div className="App">
        <nav className="navbar navbar-fixed-top navbar-inverse navbar-left">
          <div className="container-fluid">
            <div className="container-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a className="navbar-brand">Dog Shelter</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li><NavLink to="/dogs">Home</NavLink></li>
                {navbar}
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/dogs" render={() => <DogList dogs={this.props.dogs} />} />
          {/* <Route exact path="/dogs/:dogName" render={(routeProps) => <Dog name={routeProps} />} /> */}
          <Route render={() => <DogList />} />
        </Switch>
      </div>
    );
  }
}

export default App;
