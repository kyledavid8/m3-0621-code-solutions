import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Click: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    let backgroundColor = 'black';
    let color = 'white';
    let Click = this.state.Click;
    if (Click >= 3 && Click < 6) {
      backgroundColor = 'purple';
    } else if (Click >= 6 && Click < 9) {
      backgroundColor = 'CornflowerBlue';
    } else if (Click >= 9 && Click < 12) {
      backgroundColor = 'coral';
    } else if (Click >= 12 && Click < 15) {
      backgroundColor = 'orange';
      color = 'black';
    } else if (Click >= 15 && Click < 18) {
      backgroundColor = 'yellow';
      color = 'black';
    } else if (Click >= 18) {
      backgroundColor = 'white';
      color = 'black';
    }

    return (
      <button style={{ color: color, backgroundColor: backgroundColor }} onClick={this.handleClick}>Hot Button</button>
    )
  }

  handleClick() {
    let addOne = this.state.Click + 1;
    this.setState({ Click: addOne });
  }
}

export default HotButton;
