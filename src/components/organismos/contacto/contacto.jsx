import React from 'react';
import Form from '../../moleculas/form/form';
import Titulo from '../../atomos/textos/titulo';
import Cuerpo from '../../atomos/textos/cuerpo';

import './contacto.css'
const Contacto = () => {
    return (
        <div className='contacto'>
            <div className="formulario">
                <Form/>           
            </div>
            <div className="textoContacto">
                <Titulo value='¿CONSULTAS?' style='tituloFormNegro'/>
                <Titulo value='CONTACTANOS' style='tituloFormBlanco'/>
                <Cuerpo value='Estamos trabajando para vos' style='subtituloForm '/>
            </div>
        </div>
    );
}

export default Contacto;
