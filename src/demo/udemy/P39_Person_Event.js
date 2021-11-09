import React, {Component} from 'react';
import './../../App.css';


class P39_Person_Event extends Component {
  state = {
    persons: [
      {name: 'Jack', age: 38},
      {name: 'Max', age: 39},
      {name: 'Stephen', age: 29}
    ],
    otherValue : 'test'
  }

  switchNameHandler = () => {
    //console.log('Clicked!');
    this.setState({persons :  [
        {name: 'Jack01', age: 37},
        {name: 'Max', age: 39},
        {name: 'Stephen', age: 29}
      ]
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.switchNameHandler}>switch Name</button>
        <p>I'm {this.state.persons[0].name} and I have visited {this.state.persons[0].children} countires.</p>
      </div>
    )
  }

}

export default P39_Person_Event;
