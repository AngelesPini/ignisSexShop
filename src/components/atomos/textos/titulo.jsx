import React from 'react';
import './textos.css'
const Titulo = ({value, style}) => {
    return (
        <>
            <p className={style}>{value}</p>
        </>
    );
}

export default Titulo;
