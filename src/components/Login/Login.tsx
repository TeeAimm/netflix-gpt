import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import './Login.scss'
import Header from '../Header/Header'
import { checkValidData } from 'utils/validate'
import { auth } from '../../utils/firebase'
import { useDispatch } from 'react-redux';
import { addUser } from 'store/userSlice';

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isSigninForm, setIsSigninForm] = useState<boolean>(true)
    const [errorMsg, setErrorMsg] = useState<string | null>(null)
    const fullName = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    const toggleSignIn = () => {
        setIsSigninForm(!isSigninForm);
    }

    const handleUpdateProfile = (user: any) => {
        updateProfile(user, {
            displayName: fullName?.current?.value, photoURL: "https://avatars.githubusercontent.com/u/26965110?v=4"
        }).then(() => {
            const { uid, email, displayName, photoURL } = { ...auth.currentUser };
            dispatch(addUser({ uid, email, displayName, photoURL }))
            navigate('/browse')
        }).catch((error) => {
            setErrorMsg(error.message);
        });
    }

    const handleBtnClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log(email, password)
        if (email?.current?.value && password?.current?.value) {
            const message = checkValidData(email?.current?.value, password?.current?.value)
            setErrorMsg(message);

            if (message) return;

            if (!isSigninForm) {
                // Sign up logic
                createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
                    .then((userCredential) => {
                        // Signed up 
                        const user = userCredential.user;
                        handleUpdateProfile(user)
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;

                        setErrorMsg(errorCode + ": " + errorMessage)
                    });
            } else {
                // Sign in logic
                signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        // handleUpdateProfile(user)
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setErrorMsg(errorCode + ": " + errorMessage)
                    });
            }

        }
    }

    return (
        <div className='login__body'>
            <Header />
            <div className='login__body__signin'>
                <div className='login__body__signin__inner' >
                    <h2 className='mb-4'>{isSigninForm ? 'Sign In' : "Sign Up"}</h2>
                    <form onSubmit={(e) => handleBtnClick(e)} className='d-flex flex-column'>
                        {!isSigninForm && <input ref={fullName} className='mb-3 form-control' type='text' placeholder="Full Name" />}
                        <input ref={email} className='mb-3 form-control' type='text' placeholder="Email" />
                        <input ref={password} className='mb-3 form-control' type='password' placeholder="Password" />
                        {errorMsg && <p className='alert alert-danger'>{errorMsg}</p>}
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