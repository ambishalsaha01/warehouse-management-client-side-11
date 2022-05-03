import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth)

    if(loading || sending){
        return <Loading></Loading>
    }

    if(error){
        errorElement = <p className='text-warning'>Error: {error?.message}</p>
    }

    if(user){
        navigate(from, { replace: true });
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email)
            toast('Email Sent Successfully')
        }
        else{
            toast('Please Enter Your Email')
        }
    }

    return (
        <div className='login-form mx-auto'>
            <h2 className='text-center mt-2'>Login Here</h2>
            <SocialLogin></SocialLogin>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Enter Password" required />
                </Form.Group>
                {errorElement}
                <Button className='submit-btn' type="submit">
                    Login Now
                </Button>
            </Form>
            <p className='text-center'>Not a member? <Link to="/register" className='text-warning text-decoration-none' onClick={navigateRegister}>Register Now.</Link> </p>
            <p className='text-center'>Forgoted Password? <button className='btn btn-link text-warning text-decoration-none' onClick={resetPassword}>Reset Your Password</button></p>
            <ToastContainer />
        </div>
    );
};

export default Login;