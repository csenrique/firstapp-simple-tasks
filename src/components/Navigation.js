import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav className="navBar navBar-dark bg-dark">
                <a href="/" className="text-white">
                   Tasks
                </a>
                <div className="text-white"> {this.props.title}</div>
            </nav>
        );
    }
}

export default Navigation;