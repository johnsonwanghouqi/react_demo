import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import RouteApp from './demo/youtube/RouteApp.js';
import P31_Person from './demo/udemy/P31_Person.js';
import P35_Person from './demo/udemy/P35_Person.js';
import P36_Person from './demo/udemy/P36_Person.js';
import P37_Person from './demo/udemy/P37_Person.js';
import P39_Person_Event from './demo/udemy/P39_Person_Event.js';
import P41_Person_useState from './demo/udemy/P41_Person_useState.js';

const TestConst = ({match}) => {
  return (<p> Print {match.params.user} </p>);
}

const TestRedirect = (params) => {
  return (<p> Hello {params.user} </p>);
}

class App extends Component {

  state = {
    loggedIn : false
  }

  logInHandle = () => {
    this.setState({loggedIn:!this.state.loggedIn})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <RouteApp />

        //P37
        <button>Switch Name</button>
        <P31_Person /><P35_Person name="Jack" /><P36_Person name="Jack">2</P36_Person>
        <P41_Person_useState />

      </div>
    );
  }

}

export default App;
