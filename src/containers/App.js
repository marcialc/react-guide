import React, { Component } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

class App extends Component {

  constructor(props){
    super();
    console.log('[App.js] constructor');
  };
 
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28},
      { id: 2, name: 'Manu', age: 29},
      { id: 3, name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changedCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps ',props);
    return state;
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  };

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  };

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();

    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => { return p.id === id; })
    const person = {...this.state.persons[personIndex]};

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => { 
      return {
        persons: persons, 
        changedCounter: prevState.changedCounter+1 
      }
    });
  };

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };
  
    render () {

      console.log('[App.js] render')

      let persons = null;
      let show = this.state.showCockpit;

      if(this.state.showPersons){
        persons = (
          <div>
              <Persons 
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler} 
                isAuthenticated={this.state.authenticated}
              />
          </div> 
        );
      }  

      return (
          <Aux>
            <button onClick={() => {this.setState({ showCockpit: !show})}}>Remove Cockpit</button>
            <AuthContext.Provider 
            value={{ 
              authenticated: this.state.authenticated, 
              login: this.loginHandler 
              }} 
            >
            { this.state.showCockpit ?
              (<Cockpit 
                title={this.props.appTitle}
                personsLength={this.state.persons.length}
                showPersons={this.state.showPersons}
                clicked={this.tooglePersonsHandler}
              /> 
              ): null}
            {persons}
            </AuthContext.Provider>
          </Aux>
      );
    //  return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hello There!`'))
  }
}

export default withClass(App, classes.App);











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

// import styled from 'styled-components';
// import Radium, { StyleRoot } from 'radium';

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


    // style.backgroundColor = 'red';
        // style[':hover'] = {
        //   backgroundColor: 'salmon',
        //   color: 'black'
        // }