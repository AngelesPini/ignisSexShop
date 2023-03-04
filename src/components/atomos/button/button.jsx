import React from 'react';
import './button.css'
const Button = ({value}) => {
    return (
        <>
            <button className='botonForm'>{value}</button>
        </>
    );
}

export default Button;
