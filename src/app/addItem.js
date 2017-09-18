var React = require('React');
require('./css/AddItem.css');

var AddItem = React.createClass({
  render: function(){
    return(
      <form id="add-todo" onSubmit={this.handleSubmit}>
        <input type="text" ref={(input) => this.textInput = input} required/>
        <input type="submit" value="Click me" />
      </form>
    );
  },

  //Custom functions

  handleSubmit:function(e){
    e.preventDefault();
    this.props.onAdd(this.textInput.value);
  }

});

module.exports = AddItem;
