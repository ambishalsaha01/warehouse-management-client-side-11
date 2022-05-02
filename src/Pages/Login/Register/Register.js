import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css';

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }

    if(user){
        navigate('/home');
    }

    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='container register-form mx-auto'>
            <h2 className='register-title text-center mt-2'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Enter Your Name'/>
                <input type="email" name="email" placeholder='Enter Email Address' required/>
                <input type="password" name="password" placeholder='Enter Password' required/>
                <input className='register-btn' type="submit" value="Register Now" />
            </form>
            <p className='text-center'>Already have an account? <Link to="/login" className='text-warning text-decoration-none' onClick={navigateLogin}>Please Login.</Link> </p>
        </div>
    );
};

export default Register;