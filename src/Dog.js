import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// const dogsName = this.props.dogs.map(d => d.name);
// const name = this.props.match.params.name;

class Dog extends Component {

    // search(name) {
    //     if (dogsName.includes(name)) {
    //         let idx = dogsName.findIndex(name);
    //         let dog = this.props.dogs.idx;
    //         <div>
    //             <h1>{dog.name}</h1>
    //             <p>{dog.age}</p>
    //             <img src={dog.src} />
    //             <p>{dog.fact}</p>
    //         </div>
    //     } else {
    //         <Redirect to="/dogs" />
    //     }


    // }
    render() {

        let dog = this.props.dogs[0];
        console.log(dog);
        return (
            <div className="Dog">
                <div>
                    <h1>{dog.name}</h1>
                    <p>{dog.age}</p>
                    <img src={dog.src} />
                    {dog.facts.map(f => <p>{f}</p>)}
                </div>

            </div>
        )
    }
}

export default Dog;