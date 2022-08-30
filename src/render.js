const React = require('react');
const ReactDOM = require('react-dom/client');


var MiComponente = React.createClass({
    render: function () {
        return (
            <div>
                <h1>componente con createClass()</h1>
                <p>Este componente React lo creo como simple prueba. Lo hago con CreateClass porque quiero centrarme en ES5</p>
            </div>
        );
    }
});

ReactDOM.render(<MiComponente />, anclaje);

