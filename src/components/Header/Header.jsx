import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div>
           <nav className='header'>
            <img src={logo} alt="" />
            
            <div>
            <a href="/shop">shop</a>
            <a href="/order">order</a>
            <a href="/inventory">inventory</a>
            <a href="/log in">log in</a>
            </div>

           </nav>
        </div>
    );
};

export default Header;