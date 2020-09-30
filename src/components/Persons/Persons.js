import React, { PureComponent } from 'react';
import Person from './Person/Person'

// PureComponet is the same as Component just with shoudlComponentUpdate
// Already Implemented checking all props 

class Persons extends PureComponent {

    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if(nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked) return true;
    //     else return false;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return { message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate')
        console.log(snapshot)
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering...')
        return this.props.persons.map( (person, index) => {
                return (
                    <Person 
                        name={person.name} 
                        age={person.age}
                        key={person.id}
                        click={() => this.props.clicked(index)}
                        changed={(event) => this.props.changed(event, person.id)}
                        isAuth={this.props.authenticated}
                    />
                )    
        })
    }
}

export default Persons;



