import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';
class DogList extends Component {
    render() {
        return (
            <div className="DogList">
                <h1>Click a Dog!</h1>
                <div className="row">

                    {this.props.dogs.map(d =>
                        <div className="col-xs-12 col-md-4" >
                            <img className="img-circle" src={d.src} />
                            <Link to={`/dogs/${d.name}`}>
                                {d.name}
                            </Link>
                        </div>
                    )}

                </div>
            </div>
        )
    }
}
export default DogList;