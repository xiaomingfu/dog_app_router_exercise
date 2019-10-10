import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DogList extends Component {
    render() {
        return (
            <div className="DogList">
                {this.props.dogs.map(d =>
                    <div>
                        <Link to={`/dogs/${d.name}`}>{d.name}</Link>
                        <img src={d.src} />
                    </div>
                )}
            </div>
        )
    }
}

export default DogList;