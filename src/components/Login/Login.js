import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UseContext';
import './Login.css'

const Login = () => {
    const {logIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleOnSubmit = event =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        logIn(email, password)
        .then(result =>{
            const user = result.user
            console.log(user)
            form.reset()
            navigate(from,{replace: true})
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div>
            <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleOnSubmit}>
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