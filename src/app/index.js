var React = require('react');
var ReactDOM = require('react-dom');

//Create component
var TodoComponent = React.createClass({
  getInitialState: function(){
    return {
      todos:['wash up', 'eat cheese', 'walk mark sanchez'],
      age: 27
    }
  },
  render: function(){
    var ager = setTimeout(function(){
      this.setState({
        age: 37
      });
    }.bind(this), 5000);
    return(
      <div id="todo-list">
        <p>The busiest people have the most leisure</p>
        <p>{this.state.age}</p>
        <ul>
          <li>{this.state.todos[0]}</li>
          <li>{this.state.todos[1]}</li>
          <li>{this.state.todos[2]}</li>
        </ul>
      </div>
    );
  }// render
});

var myCheese = {
  name: 'Monterey Jack',
  smellFactor: "not very",
  price: '4.00'
}


//put component into HTML page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
