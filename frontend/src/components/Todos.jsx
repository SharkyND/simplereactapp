import React, { Component } from "react";
import Item from "./Todoitem";
import PropTypes from "prop-types";
class Todos extends Component {
  render() {
    return this.props.todos.map((element) => (
      <Item
        key={element.id}
        todo={element}
        markComplete={this.props.markComplete}
        deleteItem={this.props.deleteItem}
      />
    ));
  }
}

//This is kind of important, in which we define the type/properties of the props recieved from Parent, where it is required or not. So it is a good pratice
//Also make sure if its an object or array of objects
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
export default Todos;
