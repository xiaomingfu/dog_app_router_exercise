import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DogList from './DogList';
import Dog from './Dog';
class Routes extends Component {
    render() {
        //function
        const getDog = props => {
            let name = props.match.params.name;
            let currentDog = this.props.dogs.find(
                dog => dog.name.toLowerCase() === name.toLowerCase()
            );
            return <Dog {...props} dog={currentDog} />
        }
        return (
            <Switch>
                <Route exact path="/dogs" render={() => <DogList dogs={this.props.dogs} />} />
                <Route exact path="/dogs/:name" render={getDog} />
                <Redirect to='/dog' />
            </Switch>
        )
    }
}

export default Routes;