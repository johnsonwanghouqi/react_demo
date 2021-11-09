import React, {Component} from 'react';
import logo from './../../logo.svg';
import './../../App.css';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';

const TestConst = ({match}) => {
  return (<p> Print {match.params.user} </p>);
}

const TestRedirect = (params) => {
  return (<p> Hello {params.user} </p>);
}

class RouteApp extends Component {

  state = {
    loggedIn : false
  }

  logInHandle = () => {
    this.setState({loggedIn:!this.state.loggedIn})
  }

  render() {
    return (
      <div className="App">
        <Router>
          <a className="App-link" href="https://www.youtube.com/watch?v=XRfD8xIOroA" target="_blank">React Router Complete Guide </a>
          (Route, Link, NavLink, Redirect, Prompt )
          <ul>
          <li><Link to="/" className="App-link">Home</Link></li>
          <li><NavLink to="/about" exact activeStyle={{color : 'green'}} >About</NavLink></li>
          <li>
            <NavLink to="/testConst/Apple" exact activeStyle={{color : 'green'}} > Apple</NavLink>
            <span>----</span>
            <NavLink to="/testConst/Banana" exact activeStyle={{color : 'green'}} > Banana</NavLink>
            <span>----</span>
            <NavLink to="/testConst/Coconut" exact activeStyle={{color : 'green'}} > Coconut</NavLink>
          </li>
          <li><NavLink to="/testRedirect/Peter" exact activeStyle={{color : 'green'}} > Login as Peter</NavLink></li>

          </ul>


          <Prompt
            when={!this.state.loggedIn}
            message={(location)=>{
              return location.pathname.startsWith('/testRedirect') ? 'You need to login first' : true;
            }}
          />


          <input type="button" value={this.state.loggedIn ? 'Log out' : 'Log in'} onClick={this.logInHandle.bind(this)} />

          <Route path="/" exact render= { () => {return (<p> Home </p>);}} />
          <Route path="/about" exact strict render= { () => {return (<p> About </p>);}} />
          <Route path="/testConst/:user" exact strict component= {TestConst} />
          <Route path="/testRedirect/:user" exact strict render={({match})=>(this.state.loggedIn ? (<TestRedirect user={match.params.user}/>) : (<Redirect to="/" />))} />
        </Router>
      </div>
    );
  }

}

export default RouteApp;
