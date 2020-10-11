import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import Addtodo from "./components/Addtodo";
import About from "./components/pages/about";
//import { v4 as uuidv4 } from "uuid";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        /*{
          id: uuidv4(),
          title: "Take out crash",
          completed: false,
        },
        {
          id: uuidv4(),
          title: "Task 2",
          completed: false,
        },
        {
          id: uuidv4(),
          title: "Task 3",
          completed: false,
        },
        {
          id: uuidv4(),
          title: "Task 4",
          completed: false,
        },
        {
          id: uuidv4(),
          title: "Task 5",
          completed: false,
        },*/
      ],
    };
  }

  //Very import to link the react js with back hand we have to use axios
  // We have to use componentDidMount is the lifecycle method we need to use for axios. You need to first install axios

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      this.setState({ todos: res.data });
    });
  }

  //Always use an arrow function!!! Otherwise you will have to bind this, As when you make custom functions which are not lifecycle methods, it will not have "this" in them
  //This is the way the element is not mutated! #Spread element
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((element) => {
        if (element.id !== id) return element;
        else return { ...element, completed: !element.completed };
      }),
    });
  };
  // similarly axios could be used to delete these items
  deleteItem = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        this.setState({
          todos: [...this.state.todos.filter((element) => element.id !== id)],
        })
      );

    /*this.setState({
      todos: [...this.state.todos.filter((element) => element.id !== id)],
    });*/
  };

  addTodo = (e, newElement) => {
    //This was done before now we will use axios
    e.preventDefault();
    /*newElement.id = uuidv4();
    newElement.completed = false;
    this.setState({
      todos: [...this.state.todos, newElement],
    });*/

    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: newElement.title,
        completed: false,
      })
      .then((res) =>
        this.setState({
          todos: [...this.state.todos, res.data],
        })
      )
      .catch((err) => console.log("Hello"));
  };

  render() {
    //Very import while routing, you need to add "exact" at the home directory "/" otherwise other pages following the directory will load the index page along with other page which they are suppose to load
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <Addtodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    deleteItem={this.deleteItem}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
