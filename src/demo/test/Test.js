import React, { Component } from 'react';
import './../../App.css';
import './coco.css';

const SearchForm = ({props}) => {
  return (
    <form onSubmit={props.handleChange}>
      <label>
        <input type="text" value={props.key} onChange={props.handleChange} />
      </label>
    </form>);
}

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      key:'',
      cocoData: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.load = this.load.bind(this);
  }

  load(k) {
    fetch("http://localhost:8080/coco/pic/d/search?k="+k,
        {headers: {
              'Access-Control-Allow-Origin': '*'
            }}
      )
      .then(response => response.json())
      .then(
          (response) => {
            this.setState({
              error: null,
              isLoaded: true,
              cocoData: response
            });

          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
      )
  }

  handleChange(event) {
      this.setState({key: event.target.value});
      this.load(event.target.value);
  }

  componentDidMount() {
     this.load(this.state.key);
  }

  render() {
    const { error, isLoaded, key, cocoData } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (<SearchForm props={{handleChange: this.handleChange, key:this.state.key}}/>)
    } else {
      return (
      <div className="coco-page">
      <SearchForm props={{handleChange: this.handleChange, key:this.state.key}}/>
       <ul>

          {cocoData.map(cocoSource => (
            <li key={cocoSource.encode}>
              <a href="">{cocoSource.name}</a>
            </li>
          ))}

       </ul>
      </div>
      );
    }
  }
}

export default Test;
