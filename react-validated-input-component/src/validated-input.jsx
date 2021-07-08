import React from 'react';
import ReactDOM from 'react-dom';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {password: "",
  mark: "", message: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="container">
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            Password
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="input" />
          </label>
          <div className="mark">
            <i className={this.state.mark}></i>
          </div>
        </form>
        <div className="message">{this.state.message}</div>
      </div>
    )
  }

  handleChange(event) {
    let value = event.target.value;
    let state = this.state;

    if(state.password.length < 8) {
      this.setState({ password: value, message: "Your password is too short.",
        mark: "fas fa-times"})
    } else {
      this.setState({
        password: value, message: "", mark: "fas fa-check"
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  if (this.state.password.length <= 0) {
    this.setState({
      message: "A password is required.",
      mark: "fas fa-times"
    })
  }
  }
}

export default ValidatedInput;
