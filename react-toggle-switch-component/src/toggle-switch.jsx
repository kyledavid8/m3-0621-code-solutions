import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: 'OFF'};
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    let position = '0px';
    let containerBackground = 'white';
    let stat = this.state.status;

    if(stat === 'ON') {
      position = '60px'
      containerBackground = 'green'
    }

    return (
      <div className="box">
        <div className="container" style={{backgroundColor: containerBackground }} onClick={this.handleClick}>
          <div className="switch" style={{left: position}}></div>
        </div>
        <div className="word">{stat}</div>
      </div>
    )
  }

  handleClick() {
    let status = this.state.status;
    if(status === 'OFF') {
      this.setState({ status: 'ON' })
    } else {
      this.setState({ status: 'OFF' })
    }
  }
}

export default ToggleSwitch;
