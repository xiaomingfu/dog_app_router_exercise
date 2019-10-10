import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';
class DogList extends Component {
    render() {
        return (
            <div className="DogList">
                <h1 className="display-1 text-center">Click a Dog!</h1>
                <div className="container">
                    <div className="row">
                        {this.props.dogs.map(d =>
                            <div className="DogList col-xs-12 col-lg-4 text-center" key={d.name}>
                                <img className="img-circle" src={d.src} alt={d.name} />
                                <Link to={`/dogs/${d.name}`}>
                                    {d.name}
                                </Link>
                            </div>
                        )}

                    </div>

                </div>

            </div>
        )
    }
}
export default DogList;