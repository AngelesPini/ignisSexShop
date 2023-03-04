import React from 'react';
import Instagram from '../../../assets/isntagram.png'
import Location from '../../../assets/location.png'
import Cuerpo from '../../atomos/textos/cuerpo';
import LogoFooter from '../../../assets/logo-transparente.png'
import { Link } from 'react-router-dom';

import './footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="brandFooter">
                <img src={LogoFooter} alt="" />
            </div>
            <div className="instagramFooter">
                <img src={Instagram} alt="" />
                <Link to='https://www.instagram.com/ignissexyshop.sf/' target={'_blank'} className='cuerpoFooter '>@ignissexyshop.sf</Link>
            </div>
            <div className="locationFooter">
                <img src={Location} alt="" />
                <Cuerpo value='Santa Fe Capital, CP: 3000' style=' cuerpoFooter '/>
            </div>
        </div>
    );
}

export default Footer;
