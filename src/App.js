import React, { Component } from 'react';
//import FeedbackMessage from './FeddbackMessage/FeedbackMessage';
//import OtroSaludo from './OtroSaludo/otroSaludo';
import logo from './logo.svg';
import './App_new.css';
import todos  from './tareas.json';

export class App extends Component {
    //var App = React.createClass({   

    constructor() {
     super();
       this.state = todos;      
    }

    render() {   
       
       
      let todos_list = this.state.todos.map((todo, i) => {
            return(
                <div className="col-md-4">
                    <div className="card mt-4">
                        <div className="card-header">
                            <h3>{todo.title}</h3>
                            <span className="badge badge-pill badge-danger ml-2">
                                {todo.priority}
                            </span>
                        </div>
                        <div className="card-body">
                            <p>{todo.description}</p>
                            <p><mark>{todo.responsible}</mark></p>
                        </div>
                    </div>
                </div>
            )
        });


        return (
            <div className="App">
              <nav className="navBar navBar-dark bg-dark text-left">
                <a href="/" className="text-white ml-3">
                   Tasks
                   <span className="badge badge-pill badge-light ml-2">
                       {this.state.todos.length}
                   </span>
                </a>               
            </nav> 
            <div className="container">
                <div className="row mt-4">
                {todos_list}     
                </div>  
            </div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        );
    }
}
//);

export default App;
