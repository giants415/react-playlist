var React = require('react');
var ReactDOM = require('react-dom');

//Create component
var TodoComponent = React.createClass({
  render: function(){
    return(
      <div>
        <p><strong>Cheese name:</strong> {this.props.cheese.name}</p>
        <p><strong>Cheese Smell factor:</strong> {this.props.cheese.smellFactor}</p>
        <p><strong>Cheese price:</strong> {this.props.cheese.price}</p>
      </div>
    );
  }
});

var myCheese = {
  name: 'Monterey Jack',
  smellFactor: "not very",
  price: '4.00'
}


//put component into HTML page
ReactDOM.render(<TodoComponent mssg="I like cookies" cheese={myCheese}/>, document.getElementById('todo-wrapper'));
