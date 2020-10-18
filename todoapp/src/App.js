import React, { Component } from 'react';
import Todos from './todos'


class App extends Component{
  state = {
    todos: [
      {id:1, content: "Go out do something"},
      {id:2, content:"Go play something"}
    ]
  }

  deleteTodo = (id) =>{
    const todoNew = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    //filter method is a non desctructive method way which creates anew aaray
    //filter if returns false for a particular id , it will remove it from the array . True to keep that elemet in the array

    //Now e need to change the state of the component
    this.setState({
      todos: todoNew
    })
    console.log(id);

  }
//state-> object and todos-> array

render(){
  return(
    <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>

    </div>

  );
}
}


export default App;
