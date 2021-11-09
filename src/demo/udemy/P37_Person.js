import React, {Component} from 'react';
import './../../App.css';


class P37_Person extends Component {
  state = {
    persons: [
      {name: 'Jack', age: 38},
      {name: 'Max', age: 39},
      {name: 'Stephen', age: 29}
    ]
  }

  render() {
    return <p>I'm {this.state.persons[0].name} and I have visited {this.state.persons[0].children} countires.</p>
  }

}

export default P37_Person;
