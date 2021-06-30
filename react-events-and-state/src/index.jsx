import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const is = this.state.isClicked;
    if(is) {
      return (
        <button>Thanks!</button>
      )
    }
    return (
      <button onClick={this.handleClick}>Click Me!</button>
    )
  }

  handleClick() {
    this.setState({ isClicked: true });
  }
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
