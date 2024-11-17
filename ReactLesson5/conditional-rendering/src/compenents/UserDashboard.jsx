import React from 'react';
import '../styles/UserDashboard.css'

const UserDashboard = ({ onLogout }) => {
    return (
        <div className="dashboard-container">
            <h2>Welcome to the User Dashboard!</h2>
            <button onClick={onLogout}>Logout</button>
        </div>
    );
};

export default UserDashboard;