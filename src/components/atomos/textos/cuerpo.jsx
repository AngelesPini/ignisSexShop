import React from 'react';
import './textos.css'
const Cuerpo = ({value, style}) => {
    return (
        <>
            <p className={style}>{value}</p>
        </>
    );
}

export default Cuerpo;
