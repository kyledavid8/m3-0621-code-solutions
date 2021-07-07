import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { indicator: 'paused', counter: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.int;
  }

  render() {
    let count = this.state.counter;
    let selection = "https://img.icons8.com/ios/50/000000/pause-squared.png"
    if(this.state.indicator === 'paused') {
      selection = "https://img.icons8.com/ios-glyphs/30/000000/play--v1.png";
    }


    return (
      <div className="container">
        <div className="watch" onClick={this.handleReset}>
          <div className="number">{count}</div>
        </div>
        <img src={selection} className="playSelection" onClick={this.handleClick}/>
      </div>
    )
  }

  handleClick(event) {
    let indicator = this.state.indicator;
    let counter = this.state.counter;

    if(indicator === 'paused') {
      this.setState( {indicator: 'playing'} );
      this.int = setInterval(() => {
        counter++;
        this.setState( {counter: counter} );
      }, 1000);
    } else {
      this.setState( {indicator: 'paused'} );
      clearInterval(this.int);
    }
  }

  handleReset() {
    if(this.state.indicator === 'paused') {
      this.setState( {counter: 0});
    }
  }
}

export default StopWatch;
