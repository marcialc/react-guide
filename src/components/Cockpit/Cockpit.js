import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        // Http request ...
<<<<<<< HEAD
        setTimeout(() => {
            //alert('Save data to cloud!');
        }, 1000) ;
=======
        // setTimeout(() => {
        //     alert('Save data to cloud!');
        // }, 1000) ;

        toggleBtnRef.current.click();
>>>>>>> 0273e6a1575425ece8e6760c3c3085c1ff25ce11

        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect')
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect')
        };
    });

    let btnClass = ' ';

    if(props.showPersons) btnClass = classes.Red;     

    const assignedClasses = [];

    if(props.personsLength <= 2) assignedClasses.push(classes.red); 
    if(props.personsLength <= 1) assignedClasses.push(classes.bold);

    return (
       <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
                Toogle Persons
            </button>   
            <button onClick={authContext.login}>Log in</button>
       </div>
    );
}

export default React.memo(Cockpit);


// React.memo () 
// is used to optimize the react app by not rendering the functional
// component when is not being used or updated. 
// Works similar to shouldComponentUpdate() in a class component