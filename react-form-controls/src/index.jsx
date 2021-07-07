import React from "react";
import ReactDOM from "react-dom";

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" onChange={this.handleChange} value={this.state.email} />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    )
  }

  handleChange(event) {
    this.setState({email: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
  }
}

ReactDOM.render(
  <NewsletterForm />,
  document.querySelector('#root')
)
