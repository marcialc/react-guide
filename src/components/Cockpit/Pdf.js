import React from 'react';
import classes from './Cockpit.css'

const Pdf = () => {

    return (
            <embed 
                src={require('../../assets/components.pdf')} 
                zoom="scale" view="fit" 
                toolbad="1|0"
                height="100%"
                type="application/pdf" />
    );
};

export default Pdf;