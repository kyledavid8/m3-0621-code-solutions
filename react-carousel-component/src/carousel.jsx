import React from 'react';
import ReactDOM from 'react-dom';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {image: 0};
    this.props = props;
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.handleClickRight = this.handleClickRight.bind(this);
    this.handleDotClick = this.handleDotClick.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.int = setInterval(() => this.handleClickRight(), 3000)
  }

  render(props) {
    let prop = this.props.poke;

    return (
      <div className="container">
        <div className="carousel">
          <div className="left">
            <i className="fas fa-chevron-left" onClick={this.handleClickLeft}></i>
          </div>
          <div className="images">
            <img src={prop.[this.state.image].link} />
          </div>
            <div className="right">
              <i className="fas fa-chevron-right " onClick={this.handleClickRight}></i>
            </div>
          </div>
          <div className="dots">
            {
            prop.map(item => {
              return (
                <i key={item.id} className={item.id === this.state.image ? 'fas fa-circle' : 'far fa-circle'} onClick={() => this.handleDotClick(item.id)}></i>
              )
              })
            }
          </div>
        </div>
    )
  }

  handleClickLeft(props) {
    clearInterval(this.int)
    this.componentDidMount();

    if(this.state.image === 0) {
      this.setState({image: this.props.poke.length - 1});
    } else {
      let newIndex = this.state.image - 1;
      this.setState({image: newIndex});
    }
  }

  handleClickRight(props) {
    clearInterval(this.int)
    this.componentDidMount();

    if(this.state.image === this.props.poke.length - 1) {
      this.setState({image: 0})
    } else {
      let newIndex = this.state.image + 1;
      this.setState({image: newIndex});
    }
  }

  handleDotClick(id) {
    clearInterval(this.int)
    this.componentDidMount();

    this.setState({image: id});
  }
}

export default Carousel;
