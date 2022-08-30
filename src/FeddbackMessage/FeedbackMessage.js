import React, { Component } from 'react';
export default class FeedbackMessage extends Component {
    render() {
        return (
            <div>
                Bienvenido {this.props.nombre} a {this.props.app}
            </div>
        )
    }
}
