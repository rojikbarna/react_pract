import React from 'react';
import TodoList from './app/todoList';
import CreateItem from './app/CreateItem';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { todos: [
      { label: 'one' },
      { label: 'asdasd' },
      { label: '322' },
      { label: 'sdffsd' },
      { label: 'five' }
    ] };
  }
  delete (inputValue) {
    let todos = this.state.todos;
    for (let i = 0; i < this.state.todos.length; i++) {
      todos.label = inputValue;
      this.setState({label: });
    }
  }
  submit (inputValue) {
    console.log(inputValue);
    let todos = this.state.todos;
    todos.push({label: inputValue});
    this.setState({todos: todos});
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
