import React from 'react';
import CreateItemForm from './createItem/CreateItemForm';

class CreateItem extends React.Component {
  submit (inputValue) {
    console.log(inputValue);
    this.props.submit(inputValue);
  }
  render () {
    return (
      <div className='createItemWrapper'>
        <p>create new Item </p>
        <CreateItemForm submit={this.submit.bind(this)} />
      </div>
    );
  }
}
export default CreateItem;
