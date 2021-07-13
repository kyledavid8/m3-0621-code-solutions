import React from 'react';
import ReactDOM from 'react-dom';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      "one": "hidden",
      "two": "hidden",
      "three": "hidden"
    }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  render(props) {
    let prop = this.props.content;
    let state = this.state;

    return (
      <div className="container" onDoubleClick={this.handleClose}>
        <div className="one" onClick={this.handleOpen}>
          {prop[0].name}
        </div>
        <div className={`text one ${state.one}`}>{prop[0].description}</div>
        <div className="two" onClick={this.handleOpen}>
          {prop[1].name}
        </div>
        <div className={`text two ${state.two}`}>{prop[1].description}</div>
        <div className="three" onClick={this.handleOpen}>
          {prop[2].name}
        </div>
        <div className={`text three ${state.three}`}>{prop[2].description}</div>
      </div>
    )
  }

  handleOpen(event) {
    let target = event.target.className;
    this.setState({
      "one": "hidden",
      "two": "hidden",
      "three": "hidden"
    })
    this.setState({
      [target]: "on"
    })
  }

  handleClose(event) {
    this.setState({
      "one": "hidden",
      "two": "hidden",
      "three": "hidden"
    })
  }
}

export default Accordion;
