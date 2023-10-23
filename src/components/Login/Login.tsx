import React, { useState } from 'react'

import './Login.scss'
import Header from '../Header/Header'

const Login = () => {
    const [isSigninForm, setIsSigninForm] = useState<boolean>(true)

    const toggleSignIn = () => {
        setIsSigninForm(!isSigninForm);
    }

    return (
        <div className='login__body'>
            <Header />
            <div className='login__body__signin'>
                <div className='login__body__signin__inner' >
                    <h2 className='mb-4'>{isSigninForm ? 'Sign In' : "Sign Up"}</h2>
                    <form className='d-flex flex-column'>
                        {!isSigninForm && <input className='mb-3 form-control' type='text' placeholder="Full Name" />}
                        <input className='mb-3 form-control' type='text' placeholder="Email" />
                        <input className='mb-3 form-control' type='password' placeholder="Password" />
                        <button type='submit' className='btn btn-danger mt-4'>{isSigninForm ? 'Sign In' : "Sign Up"}</button>
                    </form>
                    <div className='sign__up'>
                        <span>{isSigninForm ? 'New to Netflix? ' : 'Already a member? '}</span>
                        <a onClick={toggleSignIn}>{isSigninForm ? 'Sign Up Now' : 'Sign In'}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login