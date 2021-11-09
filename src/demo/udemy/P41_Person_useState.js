import React, { useState } from 'react';
import './../../App.css';


const P41_Person_useState = props => {
  const [personsState, setPersonsState] = useState(
    {
      persons: [
        {name: 'Max', age: 39},
        {name: 'Stephen', age: 29}
      ],
      otherValue : 'test'
    }
  );

  const switchNameHandler = () => {
    //console.log('Clicked!');
    setPersonsState({persons :  [
        {name: 'Max', age: 39},
        {name: 'Stephen', age: 29}
      ]
    })
  }

  return (
    <div>
      <button onClick={switchNameHandler}>switch Name at P41_Person_useState</button>
      <p>I'm {personsState.persons[0].name} and I have visited {personsState.persons[0].children} countires.</p>
    </div>
  );

}
export default P41_Person_useState;
