import React from 'react';

import classes from './Pdf.css';
import pdf from '../../assets/components.pdf'

const Pdf = () => (
    <div className={classes.Pdf}>
        <iframe 
        src={pdf + "#toolbar=0"} 
        zoom="scale" 
        scrolling="no"
        view="fit"
        height="100%"
        width="100%"
        type="application/pdf" />
    </div>
            
);

export default Pdf;