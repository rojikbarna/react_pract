import React from 'react';

class TodoItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = { isDone: false };
  }
  delete () {
    console.log('delete succesfull', this.state.isDone);
    this.props.delete(this.props.todo.label);
  }

  changeDone () {
    this.setState({ isDone: !this.state.isDone });
    if (this.state.isDone === true) {
      this.delete();
    }
  }

  render () {
    return (
      <li style={{color: (this.state.isDone ? 'red' : '')}}>
        <button type='button' onClick={this.delete.bind(this)}>Delete</button>
        <p>{this.props.todo.label}</p>
      </li>
    );
  }
}
export default TodoItem;
