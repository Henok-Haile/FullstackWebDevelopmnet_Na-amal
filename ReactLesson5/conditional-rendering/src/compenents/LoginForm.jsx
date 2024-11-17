import React, { useState } from 'react';
import '../styles/LoginForm.css'

const LoginForm = ({ onLogin}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username, password);
    };

    return (
        <div className='login-container'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username}
                onChange={(e) => setUsername(e.target.value)} />
                <br />
                <input type="password" placeholder="Password" value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;