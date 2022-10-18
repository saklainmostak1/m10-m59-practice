import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div>
            <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form >
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="login" />
            </form>
            <p>New to ema john <Link to='/signup'>Create new account</Link> </p>
        </div>
        </div>
    );
};

export default Login;