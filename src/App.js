import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/todos';

function App() {
  return (
    <div className="App">
      <h1>Welcome to To-Do Share</h1>
      <p>To Do share is a public platform where you can search through the to do lists of other people. Some find this therapuetic, some comical, some use it for reference when they're blanking on their own to-dos!</p>
      {/* when the functionality to create your own to do exists, replace this description */}
      <TodoList />
    </div>
  );
}

export default App;
