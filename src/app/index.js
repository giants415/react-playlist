var React = require('react');
var ReactDOM = require('react-dom');

//Create component
var TodoComponent = React.createClass({
  getInitialState: function(){
    return {
      todos:['wash up', 'eat cheese', 'walk mark sanchez']
    }
  },
  render: function(){
    return(
      <div id="todo-list">
        <p>The busiest people have the most leisure</p>
        <ul>
          <li>{this.state.todos[0]}</li>
          <li>{this.state.todos[1]}</li>
          <li>{this.state.todos[2]}</li>
        </ul>
        <ListComponent todos={this.state.todos}/>
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
