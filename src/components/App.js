import React from "react";
import Header from "./Header";
import List from "./List";
import Detail from "./Detail";
import { Route, Switch } from "react-router-dom";
import getDataFromServer from "../services/data";
import "../stylesheets/App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    };
    this.handleTaskStatus = this.handleTaskStatus.bind(this);
    this.renderList = this.renderList.bind(this);
    this.renderDetail = this.renderDetail.bind(this);
  }

  componentDidMount() {
    getDataFromServer().then(data => {
      const tasks = data.results.map(task => {
        return {
          ...task, //Esto es un spread que equivale a name: "", description: "", id: ""
          completed: false
        };
      });
      this.setState({
        tasks: tasks // Actualizamos el estado
        // tasks: data.results
      });
    });
  }
  handleTaskStatus(id) {
    //iterar con un map
    const tasks = this.state.tasks.map(task => {
      // task.completed = task.id === id ? true : task.completed;
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return {
        ...task,
        completed: task.completed
      };
    });
    this.setState({
      tasks: tasks
    });
  }

  renderList() {
    return (
      <List tasks={this.state.tasks} handleTaskStatus={this.handleTaskStatus} />
    );
  }
  renderDetail(props) {
    // console.log(props.match.params.id);
    const selectedId = props.match.params.id;
    let selectedTask;
    for (const task of this.state.tasks) {
      if (task.id === selectedId) {
        selectedTask = task;
      }
    }
    return <Detail task={selectedTask} />;
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={this.renderList} />
          <Route path="/detail/:id" render={this.renderDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
