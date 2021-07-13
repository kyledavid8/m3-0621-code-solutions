import React from 'react';
import ReactDOM from 'react-dom';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {drawer: "hidden"};
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  render() {

    let barBorder = "none";

    if(this.state.drawer === "open") {
      barBorder = "2px solid black"
    }

    return (
      <div className="container">
        <i className="fas fa-bars" onClick={this.handleOpen}></i>
        <div className="background-image">
          <div className="image"></div>
        </div>
        <div className={this.state.drawer}>
          <div className="bar" style={{border: barBorder}}>
            <h1 onClick={this.handleClose}>Menu</h1>
            <h3 onClick={this.handleClose}>About</h3>
            <h3 onClick={this.handleClose}>Get Started</h3>
            <h3 onClick={this.handleClose}>Sign In</h3>
          </div>
          <div className="shade" onClick={this.handleClose}>

          </div>
        </div>
      </div>
    )
  }

  handleOpen() {
    if(this.state.drawer === "hidden") {
      this.setState({drawer: "open"})
    }
  }

  handleClose() {
    if(this.state.drawer === "open") {
      this.setState({drawer: "hidden"})
    }
  }
}

export default AppDrawer;
