import React from 'react';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import './Login.css';
import google from '../../images/google.png';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { user, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="login-bg">
                <div className="container">
                    <div className="login-container">
                        <div className="login-content text-light">
                            <div className="d-flex justify-content-center align-items-center">
                                <button className="google-login-btn" onClick={handleGoogleLogin}>
                                    <div className="d-sm-flex text-center align-items-center">
                                        <div >
                                            <img src={google} alt="" />
                                        </div>
                                        <div>
                                            <span className="login-with-google ">Login With Google</span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )

};

export default Login;