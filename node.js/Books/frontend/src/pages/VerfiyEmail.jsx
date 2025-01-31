import axios from 'axios';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const VerifyEmail = () => {
    const { token } = useParams(); // Retrieve the token from the URL
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const [isVerifying, setIsVerifying] = useState(true); // State to track verification status
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Send a request to verify the token
        axios.get(`https://new-one-yoka.onrender.com/user/verify-email/${token}`)
            .then(() => {
                enqueueSnackbar('Email successfully verified! You can now log in.', { variant: 'success' });
                setIsVerifying(false);
                navigate('/'); // Redirect to login pag
            })
            .catch((error) => {
                setIsVerifying(false);
                if (error.response) {
                    switch (error.response.status) {
                        case 400:
                            setErrorMessage('Verification token is invalid or expired.');
                            break;
                        case 404:
                            setErrorMessage('User not found. Please sign up again.');
                            break;
                        default:
                            setErrorMessage('An unexpected error occurred. Please try again later.');
                    }
                } else {
                    setErrorMessage('Network error. Please try again later.');
                }
                console.log(error);
            });
    }, [token, enqueueSnackbar, navigate]);

    const handleResendVerification = () => {
        setIsVerifying(true); // Show a loading state
        axios.post('https://new-one-yoka.onrender.com/user/resend-verification', { token })
            .then(() => {
                enqueueSnackbar('Verification email resent. Please check your inbox.', { variant: 'info' });
                setIsVerifying(false);
            })
            .catch(() => {
                enqueueSnackbar('Failed to resend verification email. Please try again later.', { variant: 'error' });
                setIsVerifying(false);
            });
    };

    return (
        <div className="p-4">
            <h1>Email Confirmation</h1>
            {isVerifying ? (
                <p>We are verifying your email. Please wait...</p>
            ) : errorMessage ? (
                <div>
                    <p>{errorMessage}</p>
                    <button
                        className="btn btn-secondary"
                        onClick={handleResendVerification}
                    >
                        Resend Verification Email
                    </button>
                </div>
            ) : (
                <p>Email verification complete! Redirecting...</p>
            )}
        </div>
    );
};

export default VerifyEmail;