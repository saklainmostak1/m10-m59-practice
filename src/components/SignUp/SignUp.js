import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UseContext';
import './SignUp.css'

const SignUp = () => {
    const [error , setError] = useState(null) 
    const {createUserAccount} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value
        console.log(email, password, confirm)
        

        if(password.length < 6){
            setError('provide at least 6 value')
            return
        }
        if(password !== confirm){
            setError('Password Not Matched')
            return
        }
        createUserAccount(email, password)
        .then(result =>{
            const user = result.user
            console.log(user)
            form.reset()
            navigate('/login')
        })
        .catch(error => {
            console.error(error)
        })

    }

    return (
        <div className='form-container'>
        <h2 className='form-title'>Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" required />
            </div>
            <div className='form-control'>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" required />
            </div>
            <div className='form-control'>
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name="confirm" id="" required />
            </div>
            <p className='text-error'>{error}</p>
            <input className='btn-submit' type="submit" value="Sign Up" />
        </form>
        <p>Already Have An Account <Link to='/login'>Login</Link> </p>
       
       
    </div>
    );
};

export default SignUp;