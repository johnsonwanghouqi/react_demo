import React, {Component} from 'react';
import './../../App.css';
import './RouteApp.css';
import logo from './../../logo.svg';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import { Tabs, Tab, Row, Col, Nav, Spinner, Image, Container } from 'react-bootstrap';
import BootStrap from './../react-bootstrap';



class RouteApp extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    if(event.key === 'Enter'){
      window.location.href = ATOM_PATH.S + event.target.value;
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

              </ul>
            </div>
            <div style={{paddingBottom: "50px"}}>
            </div>
            <Route path="/demo" exact component={BootStrap} />
          </Router>
        </BrowserRouter>
      </div>
    );
  }

}

export default RouteApp;
