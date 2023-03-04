import React from 'react';
import './botonWsp.css'

import { Link } from 'react-router-dom';
const BotonWsp = () => {
    return (
        <>
            <Link to='https://api.whatsapp.com/send?phone=5493425958209&text=Hola+vengo+de+la+web+y+quiero+mas+info' className='linkWsp'>
                <div className="btnWsp"></div>
            </Link>
        </>
    );
}

export default BotonWsp;
