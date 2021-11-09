import React, {Component} from 'react';
import './../../App.css';
import './RouteApp.css';
import logo from './../../logo.svg';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import AtomHome from './../home';
import Phoenix from './../phoenix';
import BootStrap from './../../demo/react-bootstrap';
import CocoIndex from './../coco/Index';
import PlayList from './../peach/Home';
import RawIndex from './../raw/Index';
import PlayerControlExample from './../peach/Home';
import { BrowserRouter } from 'react-router-dom';
import CocoConfig from './../coco/data/Config.json';


class RouteApp extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    if(event.key === 'Enter'){
      window.location.href = CocoConfig["PATH-ATOM-PIC-SEARCH"] + event.target.value;
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Router>
            <div className="topNavBar">
              <ul>
                <li>
                  <NavLink to="/" exact activeClassName="active" >
                    <header ><img src={logo} className="App-logo" alt="logo" /></header>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pic" activeClassName="active">
                    Coco
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/mv" activeClassName="active">
                    Peach
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/raw" activeClassName="active">
                    Raw
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/phoenix" activeClassName="active">
                    Phoenix
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/demo" activeClassName="active">
                    Demo
                  </NavLink>
                </li>
              </ul>
            </div>
            <Route path="/" exact component= {AtomHome} />
            <Route path="/pic/:operation/:key" exact component={CocoIndex} />
            <Route path="/pic/:operation" exact component={CocoIndex} />
            <Route path="/pic" exact component={CocoIndex} />
            <Route path="/mv" exact component={PlayerControlExample} />
            <Route path="/raw" exact component={RawIndex} />
            <Route path="/phoenix" exact component={Phoenix} />
            <Route path="/demo" exact component={BootStrap} />
          </Router>
        </BrowserRouter>
      </div>
    );
  }

}

export default RouteApp;
