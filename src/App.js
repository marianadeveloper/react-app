
import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';
import {todos} from './todos.json';

class App extends React.Component {
constructor () {
  super();
  this.state = {
    todos
  };
  this.handleAddTodo = this.handleAddTodo.bind(this);
}

handleAddTodo(todo){
  this.setState({
    todos: [...this.state.todos, todo]
  });
}

removeTodo(index){
  if(window.confirm('Are you sure you want to delete it?')){
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    })
  }  
}

render(){
  const todos = this.state.todos.map((todo, i) => {
    return (
      <div className="col-md-4" key={i}>
        <div className="card mt-4">
          <div className="card-header">
            <h3>{todo.title}</h3>
            <span className="badge badge-pill badge-danger ml-2">
              {todo.priority}
            </span>
          </div>
          <div className="card-body">
            <p>
              <h5>{todo.description}</h5>
            </p>
            <p>
              <mark>
                <b>{todo.responsible}</b>
              </mark>
            </p>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-danger"
              onClick={this.removeTodo.bind(this, i)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    //toda mi aplicacion esta dentro del div
    <div className="App">
      <Navigation />     
      <div className="text-left text-white mr-5 ml-5 mt-4 p-2">
      <h5>Total Registered Tasks: {todos.length}</h5>  
      </div>    
 
       <div className="container">
         <div className="row mt-4 p-2">
          <TodoForm onAddTodo={this.handleAddTodo}/>
          </div>
          <div className="row mt-4 p-2">
            {todos}
          </div>
       </div>  
    </div>
  );
}  
}

export default App;
