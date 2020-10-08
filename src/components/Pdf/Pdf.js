import React from 'react';

import classes from './Pdf.css';
import pdf from '../../assets/components.pdf'

const Pdf = () => (
    <embed 
    className={classes.Pdf}
    src={pdf + "#toolbar=0"} 
    zoom="scale" 
    view="fit"
    height="100%"
    width="100%"
    type="application/pdf" />
            
);

export default Pdf;