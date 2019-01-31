import React, { Component } from "react";
import TodoTasks from "./TodoTasks";
import "./TodoList.css";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  addTask(e) {
    if (this._inputElement.value !== "") {
      var newTask = {
        text: this._inputElement.value,
        key: Date.now()
      };
      this.setState(prevState => {
        return { tasks: prevState.tasks.concat(newTask) };
      });
    }
    this._inputElement.value = "";
    console.log(this.state.tasks);
    e.preventDefault();
  }
  deleteTask(key) {
    let filteredTask = this.state.tasks.filter(function(task) {
      return task.key !== key;
    });
    this.setState({
      tasks: filteredTask
    });
  }
  render() {
    return (
      <div className="todolistMain">
        <div className="header">
          <form onSubmit={this.addTask}>
            <input
              ref={a => (this._inputElement = a)}
              placeholder="enter task here..."
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <TodoTasks entries={this.state.tasks} delete={this.deleteTask} />
      </div>
    );
  }
}
export default TodoList;
