import React from 'react';
import { Link } from 'react-router-dom';
import ImgBrand from '../../../assets/logoNav.png'

import './nav.css'
const Nav = () => {
    return (
        <div className='nav'>
            <div className="navBrand">
                <Link to='/'><img src={ImgBrand} alt="logo minimalista de ignis sex shop" /></Link>
            </div>
            <div className="navList">
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/productos'><li>Productos</li></Link>
                    <Link to='.contacto'><li>Contacto</li></Link>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
