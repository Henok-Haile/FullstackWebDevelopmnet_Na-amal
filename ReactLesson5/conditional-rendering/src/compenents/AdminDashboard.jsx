import React from 'react';
import '../styles/AdminDashboard.css'

const AdminDashboard = ({ onLogout }) => {
    return (
        <div className="dashboard-container">
            <h2>Welcome to the Admin Dashboard!</h2>
            <button onClick={onLogout}>Logout</button>
        </div>
       
    );
};

export default AdminDashboard;