import React from 'react';
import './textos.css'
const CardText = ({value, style}) => {
    return (
        <>
            <p className={style}>{value}</p>
        </>
    );
}

export default CardText;
