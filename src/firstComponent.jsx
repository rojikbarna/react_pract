import React from 'react';
import TodoItem from './todoitem';

class App extends React.Component {
  render () {
    return (
      <ul className='todo-list'>
        <TodoItem label='Elso tennivalo' />
        <TodoItem label='masodik tennivalo' />
        <TodoItem label='harmadik tennivalo?' />
      </ul>
    );
  }
}
export default App;
