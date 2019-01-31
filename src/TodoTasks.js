import React, { Component } from "react";
class TodoTasks extends Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }
  createTasks(task) {
    return (
      <li onClick={() => this.delete(task.key)} key={task.key}>
        {task.text}
      </li>
    );
  }
  delete(key) {
    this.props.delete(key);
  }
  render() {
    let todoEntries = this.props.entries;
    let listTasks = todoEntries.map(this.createTasks);

    return <ul className="theTask">{listTasks}</ul>;
  }
}
export default TodoTasks;
