import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleSignUp = () => {

        axios
        .post('http://localhost:5555/user/signup', { username, email, password })
        .then(() => {
            enqueueSnackbar('Sign Up successful', { variant: 'success' });
            navigate('/');
        })
        .catch(error => {
            enqueueSnackbar('Sign Up failed', { variant: 'error' });
            console.log(error);
        });
    };

  return (
    <div className="p-4">
        <h1 className="mx-4 my-4">Sign Up</h1>
        <div className="p-4">
            <div className="my-4">
                <label className="mx-3 mr-4">Username</label>
                <input 
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className='px-4 py-2' />
            </div>

            <div className="my-4">
                <label className="mx-4 mr-4">Email</label>
                <input 
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className='mx-3 px-4 py-2' />
            </div>

            <div className="my-4">
                <label className="mx-3 mr-4">Password</label>
                <input 
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className='px-4 py-2' />
            </div>

            <button className="btn btn-primary mx-4 my-2 p-2" style={{width:300}} onClick={handleSignUp}>Sign Up</button>
            <div>
                <p className='mx-4'>Already have an account? <Link to='/'>Login</Link></p>
            </div>
        </div>
    </div>
  )
}

export default SignUp