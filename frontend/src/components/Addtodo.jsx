import React, { Component } from "react";
import PropTypes from "prop-types";

class Addtodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    //We are using e.target.name since if we have multiple filds, dont have to do onChange for all inputs
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form
        //
        onSubmit={(e) => {
          this.props.addTodo(e, this.state);
          this.setState({ title: "" });
        }}
        //onSubmit={() => this.props.addTodo(this.state)}
        style={{ display: "flex" }}
      >
        <input
          type="text"
          name="title"
          placeholder="Add Todo...."
          style={{ flex: "10", padding: "5px" }}
          onChange={this.onChange}
          value={this.state.title}
        />
        <input
          type="submit"
          value="Submit"
          style={{ flex: "1" }}
          className="btn btn-primary"
          //onSubmit={this.props.addTodo}
          //onClick={this.hello}
        />
      </form>
    );
  }
}

Addtodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
export default Addtodo;
