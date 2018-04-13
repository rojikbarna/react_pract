import React from 'react';
import TodoList from './app/todoList';
import CreateItem from './app/CreateItem';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      todos: [
        { label: 'one' },
        { label: 'asdasd' },
        { label: '322' },
        { label: 'sdffsd' },
        { label: 'five' }
      ]
    };
  }
  delete (label) {
    console.log(label);
    let todos = this.state.todos;
    let i = 0;
    while (i < todos.length && todos[i].label !== label) {
      i++;
    }
    console.log(i);
    if (i < todos.length) {
      todos.splice(i, 1);
      this.setState({todos: todos});
    }
  }
  submit (inputValue) {
    console.log(inputValue);
    let todos = this.state.todos;
    todos.push({ label: inputValue });
    this.setState({ todos: todos });
  }
  render () {
    console.log(this.state);
    return (
      <div className='todoListWrapper'>
        <TodoList todos={this.state.todos} delete={this.delete.bind(this)} />
        <CreateItem submit={this.submit.bind(this)} />
      </div>
    );
  }
}
export default App;
