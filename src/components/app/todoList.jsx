import React from 'react';
import TodoItem from './todoList/todoItem';

class TodoList extends React.Component {
  delete (isDone) {
    console.log(isDone);
    this.props.delete(isDone);
  }
  render () {
    let todos = this.props.todos.map(todo => {
      return <TodoItem todo={todo} key={todo} delete={this.delete.bind(this)} />;
    });
    return (
      <ul className='todo-list'>
        {todos}
      </ul>
    );
  }
}
export default TodoList;
