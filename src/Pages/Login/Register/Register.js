import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import './Register.css';

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if(loading || updating){
        return <Loading></Loading>
    }

    // if (user) {
    //  console.log('user', user);  
    // }

    const handleFormRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');
    }

    return (
        <div className='register-form mx-auto'>
            <h2 className='text-center register-title'>Register Here</h2>
            <SocialLogin></SocialLogin>
            <form onSubmit={handleFormRegister}>
                <input type="text" name="name" placeholder='Enter Your Name' />
                <input type="email" name="email" placeholder='Enter Email Address' required />
                <input type="password" name="password" placeholder='Enter Password' required />
                <input className='register-btn btn mt-2' type="submit" value="Register Now" />
            </form>
            <p className='text-center'>Already have an account? <Link to="/login" className='text-warning text-decoration-none' onClick={navigateLogin}>Please Login.</Link> </p>
        </div>
    );
};

export default Register;