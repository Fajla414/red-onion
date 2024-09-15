import React, { useContext, useState } from 'react';
import topBanner from '../../images/bannerbackground3.png';
import logo from '../../images/logo2.png';
import './signUp.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import * as firebase from 'firebase/app';
import { GoogleAuthProvider, sendEmailVerification, updateProfile } from "firebase/auth";
import 'firebase/auth';
import { getAuth, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from '../Login/firebase.config';
import { MyContext } from '../../App';
firebase.initializeApp(firebaseConfig);




const SignUp = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleBlur = (event) => {
        let isFieldValid = true;
        if (event.target.name === 'name') {
            isFieldValid = event.target.value.length > 3;
        }
        if (event.target.name === "email") {
            isFieldValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);
        }
        if (event.target.name === "password") {
            const passLength = event.target.value.length > 5;
            const hasInt = /\d/.test(event.target.value);
            isFieldValid = passLength && hasInt;
        }
        if (event.target.name === 'confirmPassword') {
            isFieldValid = user.password === event.target.value;
        }
        if (isFieldValid) {
            let newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }


    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (user.name && user.email && user.password && user.confirmPassword) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password)
                .then((res) => {
                    updateProfileName(user.name);
                    navigate('/login')
                })
                .catch((err) => {
                    console.log(err)
                });
        }
    }

    const updateProfileName = (name) => {
        const auth = getAuth();
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(() => {
            // Profile updated!
        }).catch((error) => {
            // An error occurred
        });
    }

    const verifidEmail = () => {
        const auth = getAuth();
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!
                // ...
            });
    }

    return (
        <div className="card mb-5 sign-up" style={{ border: 'none' }}>
            <img src={topBanner} className="card-img" alt="..." />
            <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
                <h1 className="card-title text-center mb-4"><img src={logo} className='img-fluid logo mb-2' alt="" /></h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" onBlur={handleBlur} name='name' required className="form-control" placeholder='Name' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <input type="email" name='email' onBlur={handleBlur} required className="form-control" placeholder='Email' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <input type="text" name='password' onBlur={handleBlur} required className="form-control" placeholder='Password' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <input type="text" name='confirmPassword' onBlur={handleBlur} required className="form-control" placeholder='Confirm Password' aria-describedby="emailHelp" />
                    </div>

                    <button type="submit" className="btn btn-danger container">Sign Up</button>
                    <Link to={'/login'} style={{ textDecoration: "none" }}><p className='text-danger text-center my-2'>Already have an account</p></Link>
                </form>
            </div>
        </div>
    );
};

export default SignUp;