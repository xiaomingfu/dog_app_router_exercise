import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        const dogLinks = this.props.dogs.map(d => (
            <li className="nav-item" key={d.name}>
                <NavLink exact to={`/dogs/${d.name}`} className="nav-link">
                    {d.name}
                </NavLink>)
            </li>
        ));
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/dogs">Dog App</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/dogs" className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        {dogLinks}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;