import React, { Component } from 'react';
//import FeedbackMessage from './FeddbackMessage/FeedbackMessage';
//import OtroSaludo from './OtroSaludo/otroSaludo';
import Navigation from './components/Navigation'
import logo from './logo.svg';
import './App_new.css';


export class App extends Component {
    //var App = React.createClass({   
    render() {
        return (
            <div className="App">
                <Navigation title="Mi Primera app react"/>
                <Navigation title="Mi segunda aproximacion"/>
    
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        );
    }
}
//);

export default App;
