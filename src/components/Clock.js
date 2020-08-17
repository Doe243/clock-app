import React, { Component } from 'react';

class Clock extends Component {

  constructor(props) {
      super(props);
      this.state = { date: new Date() };
  }

  componentDidMount() {
      this.timeID = setInterval(
          () => this.tick(),
          1000
      );
  }

  componentWillUnmount() {
      clearInterval(this.timeID);
  }

  tick() {
      this.setState({
          date: new Date()
      });
  }

render() {
    return(
        <div>
            <h2>
                <span role="img" aria-label="">⏰</span>
                Il est {this.state.date.toLocaleTimeString('fr-FR')}
            </h2>
        </div>
            
        )
    }

}

export default Clock;