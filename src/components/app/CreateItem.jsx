import React from 'react';
import CreateItemForm from './createItem/CreateItemForm';

class CreateItem extends React.Component {
  render () {
    return (
      <div className='createItemWrapper'>
        <p>create new Item </p>
        <CreateItemForm />
      </div>
    );
  }
}
export default CreateItem;
