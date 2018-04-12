import React from 'react';

class CreateItemForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }
  submit () {
    console.log('submit succesfull', this.state.inputValue);
    this.props.submit(this.state.inputValue);
  }
  changeInputValue (element) {
    this.setState({inputValue: element.target.value});
  }
  render () {
    return (
      <form>
        <input type='text' value={this.state.inputValue} onChange={this.changeInputValue.bind(this)} />
        <button type='button' onClick={this.submit.bind(this)}>Click me</button>
        <br />
        {this.state.inputValue}
      </form>
    );
  }
}
export default CreateItemForm;
