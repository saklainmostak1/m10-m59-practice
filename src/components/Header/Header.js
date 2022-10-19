import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UseContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const {logOut, user} = useContext(AuthContext)
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                
                {
                    user?.uid ? 
                    
                    <button onClick={logOut} className='log-out' >Log Out</button>
                    : 
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </div>
                }
            </div>
            <p>{user?.email}</p>
        </nav>
    );
};

export default Header;