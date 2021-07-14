import React from 'react';
import ReactDOM from 'react-dom';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      openId: null
    }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  render(props) {
    let prop = this.props.content;
    let state = this.state;

    return (
      <div className="container" onDoubleClick={this.handleClose}>
        {
          prop.map(item => {
            return (
              <div key={item.id}>
                <div className="accordion-item" onClick={() => this.handleOpen(item.id)}>
                  {item.name}
                </div>
                <div className={`accordion-description ${state.openId === item.id ? 'on' : 'hidden'}`}>{item.description}</div>
              </div>
            )
          })
        }
      </div>
    )
  }

  handleOpen(id) {
    this.setState({openId: id})
  }

  handleClose() {
    this.setState({openId: null})
  }
}

export default Accordion;
