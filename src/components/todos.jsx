import React, { Component } from 'react';
import fetchUsers from '../util/users_util';
import fetchTodos from '../util/todos_util';

const USERSAPI = `https://jsonplaceholder.typicode.com/users`
const TODOSAPI = `https://jsonplaceholder.typicode.com/todos`

class Todos extends Component {
  constructor(props) {
    super(props)
    this.state = { users: [], todos: [], filtered: false }
  }

  componentDidMount() {
    fetchUsers(USERSAPI).then((users) => {
      users.forEach((user) => {

        let updatedUsers = this.state.users.concat(user);
        this.setState({ users: updatedUsers });

        let userTodosAPI = TODOSAPI.concat(`?userId=${user.id}`);
        fetchTodos(userTodosAPI).then((todos) => {
          let updatedTodos = this.state.todos.concat(todos);
          this.setState({ todos: updatedTodos })
        })
      })
    })
  }

  filterByUser(userId) {
    const userTodos = [];
    this.state.todos.forEach((todo) => {
      if (todo.userId === userId) {
        let todoItem = {id: todo.id, title: todo.title, complete: todo.complete}
        userTodos.push(todoItem)
      }
    })
    this.setState({ todos: userTodos, filtered: true })
  }

  render() {
    const todos =
        <ul>
          {
            this.state.todos.map((todo, i) => {
              console.log(todo)
              return <li key={i}>
                <h5>TO DO</h5>
                <div> {!!todo.userId ? <button onClick={() => this.filterByUser(todo.userId)}>{todo.userId}</button> : <br /> }</div>
                <p>{todo.title}</p>
                <div>{ this.state.completed ? <h3>Completed!</h3> : <h5>(incomplete)</h5>}</div>
              </li>
            })
          }
        </ul>    
    console.log(todos)
    return(
      <div>
        <div>{this.state.filtered === true ? <button onClick={() => window.location.reload(false) }>Back</button> : <div></div>}</div>
        <h4>To Dos!</h4>
        <div>{todos}</div>
      </div>
    )
  }

}

export default Todos;