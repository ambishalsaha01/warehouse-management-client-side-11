import React from 'react';
import google from '../../../images/social/google.png';
import github from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import './SocialLogin.css'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    
    let errorElement;

    if(loading || loading1){
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate('/home');
    }

    return (
        <div className='social-login'>
            {errorElement}
            <div className='login-container'>
                <button onClick={() => signInWithGoogle()} className='btn google-login-btn'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>SignIn With Google</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn github-login-btn'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2'>SignIn With GitHub</span>
                </button>
            </div>
            <div className='d-flex align-items-center my-3'>
                <div style={{ height: '1px' }} className='bg-warning w-50'></div>
                <h4 className='px-2'>OR</h4>
                <div style={{ height: '1px' }} className='bg-warning w-50'></div>
            </div>
        </div>
    );
};

export default SocialLogin;