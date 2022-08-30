import React from 'react';
import ReactDOM from 'react-dom/client';
//import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {OtroSaludo} from './otroSaludo';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
    {/* <OtroSaludo />   */}
  </React.StrictMode>
);

//ReactDOM.render(<div><App /><App /></div>, document.getElementById('anclaje'));
//ReactDOM.render(<App />, document.getElementById('root'));

//var contenido = <h1>Hola Mundo!!</h1>;
//var anclaje = ReactDOM.createRoot(document.getElementById('anclaje'));
//var anclaje2 = document.getElementById('anclaje2');

// ReactDOM.render( 
//   <h1>Hola Mundo!!</h1>,
//   document.getElementById('anclaje2')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
