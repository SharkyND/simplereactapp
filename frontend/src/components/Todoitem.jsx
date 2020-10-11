import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  getStyle = () => ({
    background: "#f4f4f4",
    padding: "10px",
    borderBottom: "1px #ccc dotted",
    textDecoration: this.props.todo.completed ? "line-through" : "none",
  });

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={() => this.props.markComplete(id)} />{" "}
          {title}
          <button
            onClick={() => this.props.deleteItem(id)}
            style={marginAuto}
            className="btn btn-danger"
          >
            Delete
          </button>
        </p>
      </div>
    );
  }
}

//This is kind of important, in which we define the type/properties of the props recieved from Parent, where it is required or not. So it is a good pratice
//Also make sure if its an object or array of objects
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

const marginAuto = {
  float: "right",
};

//You can define style like: Notice the style classes are camel case, or anything else but cant have "-" in between
/*const itemStyle = {
  backgroundColor: "#f4f4f4",
};*/

//Prototype
TodoItem.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  markComplete: PropTypes.func.isRequired,
};
export default TodoItem;
