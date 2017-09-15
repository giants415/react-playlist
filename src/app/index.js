var React = require('react');
var ReactDOM = require('react-dom');

//Create component
var TodoComponent = React.createClass({
  getInitialState: function(){
    return {
      todos:['wash up', 'eat cheese', 'walk mark sanchez', 'buy flowers']
    }
  },
  render: function(){
    var todos = this.state.todos;
    todos = todos.map(function(item, index){
      return(
        <li>{item}</li>
      )
    });
    return(
      <div id="todo-list">
        <p>The busiest people have the most leisure</p>
        <ul>{todos}</ul>
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
