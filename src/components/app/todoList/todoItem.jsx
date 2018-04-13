import React from 'react';

class TodoItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = { isDone: false };
  }
  delete () {
    console.log('delete succesfull', this.state.isDone);
    this.props.delete(this.state.isDone);
  }

  changeDone () {
    if (this.state.isDone === false) {
      this.setState({ isDone: false });
      this.delete();
    } else {
      this.setState({ isDone: true });
    }
  }

  render () {
    return (
      <li style={{color: (this.state.isDone ? 'red' : '')}}>
        <input type='checkbox' onClick={this.changeDone.bind(this)} />
        <p>{this.props.todo.label}</p>
      </li>
    );
  }
}
export default TodoItem;
