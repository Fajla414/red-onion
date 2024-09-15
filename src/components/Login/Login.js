import React, { useContext, useState } from 'react';
import topBanner from '../../images/bannerbackground3.png';
import './login.css';
import logo from '../../images/logo2.png';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Google, Tune } from '@mui/icons-material';
import { MyContext } from '../../App';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import { getAuth, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, updateProfile } from "firebase/auth";
import firebaseConfig from '../Login/firebase.config';
firebase.initializeApp(firebaseConfig);

const Login = () => {
    const { selectedMenu, setSeletedMenu, cart, setCart, loggedInUser, setLoggedInUser } = useContext(MyContext);
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const emptyField = () => {
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
    }

    const handleBlur = (event) => {
        let isFieldValid = false;
        if (event.target.name === 'email') {
            isFieldValid = true;
        }
        if (event.target.name === 'password') {
            isFieldValid = true;
        }
        if (isFieldValid) {
            let newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then((res) => {
                const { displayName, email } = res.user;
                const signInUserInfo = { name: displayName, email };
                setLoggedInUser(signInUserInfo);
                emptyField()
            })
            .catch((error) => {
                alert(error.code)
                // console.log(error.code, error.message)
            });
    }

    const handleGoogleSignIN = () => {
        const provider = new GoogleAuthProvider();

        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((res) => {
                const { displayName, email, photoURL } = res.user;
                const newUser = { name: displayName, email, photoURL };
                setLoggedInUser(newUser);
            }).catch((error) => {
                const err = 'Login failed: ' + error.message;
                setLoggedInUser(err);
            });
    }

    return (
        <div className="card mb-5 login" style={{ border: 'none' }}>
            <img src={topBanner} className="card-img" alt="..." />
            <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
                <h1 className="card-title text-center mb-4"><img src={logo} className='img-fluid logo mb-2' alt="" /></h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="email" name='email' id='email' className="form-control" onBlur={handleBlur} required placeholder='Email' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <input type="password" name='password' id='password' className="form-control" onBlur={handleBlur} required placeholder='Password' aria-describedby="emailHelp" />
                    </div>
                    <button type="submit" className="btn btn-danger container mb-2">Sign In</button>
                    <Button onClick={handleGoogleSignIN} variant="contained" className='container' color="primary" startIcon={<Google />}>Sign IN with Google</Button>

                </form>
                <Link to={'/sign-up'} style={{ textDecoration: "none" }}><p className='text-danger text-center my-2'>I don't have an account</p></Link>

            </div>
        </div>
    );
};

export default Login;