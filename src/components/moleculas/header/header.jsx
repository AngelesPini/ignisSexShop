import React from 'react';
import Titulo from '../../atomos/textos/titulo';
import Cuerpo from '../../atomos/textos/cuerpo';

import './header.css'
const Header = () => {
    return (
        <div className='headerIndex'>
            <div className="tituloHeader">
                <Titulo value='VIBRAS' style='tituloHeaderBlanco '/>
                <Titulo value='POSITIVAS' style='tituloHeaderNegro'/>
                <Cuerpo value='No somos cualquier Sex Shop' style='subtituloHeader'/>
            </div>
        </div>
    );
}

export default Header;
