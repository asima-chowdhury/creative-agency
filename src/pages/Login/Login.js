import React, { useContext, useState } from 'react';
import logo from '../../images/logo.png';
import googleIcon from '../../images/google.png';
import './Login.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Button } from 'react-bootstrap';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSignedIn: false,
        displayName: '',
        email: '',
        photoURL:''
    })

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(result => {
                const { displayName, email ,photoURL} = result.user;
                // console.log('login successfully',result.user);
                const signedInUser = {
                    isSignedIn: true,
                    displayName: displayName,
                    email: email,
                    photoURL: photoURL
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                // console.log('login successfully');
                // setUserToken();
                history.replace(from);
            })
            .catch(function (error) {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    const handleGoogleSignOut = () => {
        firebase.auth().signOut()
            .then(function () {
                const signedOutUser = {
                    isSignedIn: false,
                    displayName: '',
                    email: '',
                    photoURL:''
                }
                setUser(signedOutUser);
                setLoggedInUser(signedOutUser);
            })
            .catch(function (error) {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    // const setUserToken = () => {
    //     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
    //         .then(function (idToken) {
    //             // console.log(idToken);
    //             sessionStorage.setItem('token', idToken);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }
    return (
        <div className="container">
            <div className="mt-5">
                <Link to="/home">
                    <Button variant="primary">Go Back</Button>
                </Link>
            </div>
            <div className="text-center">
                <Link to="/home">
                    <img src={logo} alt="logo" className="center-logo" />
                </Link>
            </div>
            <div className="login-box col-md-6 offset-md-3">
                <h4 className="font-weight-bold text-center">Login With</h4>
                <button className="my-3" onClick={handleGoogleSignIn}>
                    <img src={googleIcon} alt="google-icon" /> Continue with Google
                </button>
                <p className="text-center">Don’t have an account? 
                    <a target="_blank" href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp"> Create an account</a>
                </p>
            </div>
        </div>
    );
};

export default Login;