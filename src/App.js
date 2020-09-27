import React, { Component } from 'react';
// import styled from 'styled-components';
// import Radium, { StyleRoot } from 'radium';
import classes from './App.css';
import Person from './Person/Person';

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
  
//   &:hover {
//   background-color: ${props => props.alt ?  'salmon' : 'lightgreen'};
//   color: black;
//   }
// `;

class App extends Component {
 
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28},
      { id: 2, name: 'Manu', age: 29},
      { id: 3, name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  }
  
  // switchNameHandler = (newName) => {
  //   // DO NOT do this  persons[0]: 'Manu', age: 29},
  //     { name: 'Stephanie', age: 27}
  //     ]
  //   })
  // }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();

    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  } 

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => { return p.id === id; })

    const person = {...this.state.persons[personIndex]};

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState( { persons: persons } )
  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({ showPersons: !doesShow })
  }
  
    render () {

      // const style = {
      //   backgroundColor: 'green',
      //   color: 'white',
      //   font: 'inherit',
      //   border: '1px solid blue',
      //   padding: '8px',
      //   cursor: 'pointer',
      //   ':hover': {
      //     backgroundColor: 'lightgreen',
      //     color: 'button null;

      let persons = null;
      let btnClass = ' ';

      if(this.state.showPersons){
        persons = (
          <div>
              {this.state.persons.map( (person, index) => {
                return (
                  <Person 
                  name={person.name} 
                  age={person.age}
                  click={() => this.deletePersonHandler(index)}
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                  >
                  </Person>
                )
              })}
            </div> 
        );

        btnClass = classes.Red;     

        // style.backgroundColor = 'red';
        // style[':hover'] = {
        //   backgroundColor: 'salmon',
        //   color: 'black'
        // }
      }  

      const assignedClasses = [];
      let length = this.state.persons.length;

      if(length <= 2) assignedClasses.push(classes.red) 
      if(length <= 1) assignedClasses.push(classes.bold)


      return (
          <div className={classes.App}>
            <h1>HELLO IM React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
            className={btnClass}
            onClick={this.tooglePersonsHandler}>Toogle Persons</button>
            {persons}
          </div>
      );
    //  return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hello There!`'))
  }
}

export default App;


// React Hooks Example
// 
// const [ personState, setPersonState ] = useState({
  // persons: [
    // { name: 'Max', age: 28},
    // { name: 'Manu', age: 29},
    // { name: 'Stephanie', age: 26}
  // ],
  // otherState: 'some other value'
// });
// 
// const switchNameHandler = () => {
// 
// setPersonState({persons: [
  // { name: 'Maximilian', age: 28},
  // { name: 'Manu', age: 29},
  // { name: 'Stephanie', age: 27}
// ]})
// }