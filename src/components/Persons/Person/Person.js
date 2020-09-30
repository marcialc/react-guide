import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context'


class Person extends Component {

    constructor(props) {
        super();
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log('[Person.js] authentication: ', this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');
        return ( 
            <Aux className={classes.Person}>
            { this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
            <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input 
                type="text" 
                // ref={(inputEl) => { this.inputElement = inputEl }}
                ref={this.inputElementRef}
                onChange={this.props.changed} 
                value={this.props.name}
                />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

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
