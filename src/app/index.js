var React = require('react');
var ReactDOM = require('react-dom');
require('./css/index.css');


//Module Requires
var TodoItem = require('./todoItem');

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
        <TodoItem item={item} key={index} onDelete={this.onDelete}/>
      );
    }.bind(this));
    return(
      <div id="todo-list">
        <p>The busiest people have the most leisure</p>
        <ul>{todos}</ul>
      </div>
    );
  },// render

  //Custom functions
  onDelete:function(item) {
    var updatedTodos = this.state.todos.filter(function(val,index){
      return item !== val;
    });
    this.setState({
      todos: updatedTodos
    });
  }
});


var myCheese = {
  name: 'Monterey Jack',
  smellFactor: "not very",
  price: '4.00'
}


//put component into HTML page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
