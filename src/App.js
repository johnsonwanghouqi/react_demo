import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RouteApp from './atom/header/RouteApp.js';
import reducer from './atom/common/store/reducer/index'

const store = createStore(reducer);

class App extends Component {

  state = {
    loggedIn : false
  }

  logInHandle = () => {
    this.setState({loggedIn:!this.state.loggedIn})
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App-common">
          <RouteApp />
        </div>
      </Provider>
    );
  }

}

export default App;
