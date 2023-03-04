import React, { useRef } from 'react';
import Button from '../../atomos/button/button';
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";


import './form.css'
const Form = () => {
    const form = useRef();
    let navigate = useNavigate()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_lnbyuvu', 'template_vrb8wq1', form.current, 'yu5rrauBnGdn-WRDS')
          .then((result) => {
              console.log(result.text);
              alert('Enviado con éxito')
              e.target.reset()
              navigate('/')
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder='Nombre y apellido'name='nombre' required/>
                <input type="number" placeholder='Teléfono'name='telefono'  required/>
                <input type="email" placeholder='Email'name='email' required/>
                <textarea name="mensaje" id="" placeholder='Escriba su mensaje' required></textarea>
                <Button value='Enviar' type='submit'/>
            </form>
        </div>
    );
}

export default Form;
