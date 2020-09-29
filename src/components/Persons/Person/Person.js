import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

class Person extends Component {

    render() {
        console.log('[Person.js] rendering...');
        return ( 
            <Aux className={classes.Person}>
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        )
    }
}

export default withClass(Person, classes.Person);





// Use with Radium 
    // const style = {
    //     '@media(min-width: 500px)': {
    //         width: '450px'
    //     }
    // };    // const rnd = Math.random();

    // if( rnd > 0.7 ) throw new Error('Something went wrong');

//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;}

//     @media (min-width: 500px) {
//         width: 450px;
//     }
// `

// ERROR checking simple test
    // const rnd = Math.random();

    // if( rnd > 0.7 ) throw new Error('Something went wrong');
