import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';
class DogList extends Component {
    render() {
        return (
            <div className="DogList">
                <h1 className="display-1 text-center my-4">Click a Dog!</h1>
                <div className="row">
                    {this.props.dogs.map(d =>
                        <div className="Dogs col-xs-12 col-lg-4 text-center" key={d.name}>
                            <img className="img-circle" src={d.src} alt={d.name} />
                            <h3 className="mt-3">
                                <Link className="underline" to={`/dogs/${d.name}`}>
                                    {d.name}
                                </Link>
                            </h3>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
export default DogList;