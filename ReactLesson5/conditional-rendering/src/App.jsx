import React, { useState } from 'react';
import LoginForm from './compenents/LoginForm.jsx';
import UserDashboard from './compenents/UserDashboard.jsx';
import AdminDashboard from './compenents/AdminDashboard.jsx';
import ErrorMessage from './compenents/ErrorMessage.jsx';
import './App.css'

const App = () =>  {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      setIsAdmin(true);
      setShowError(false);
    } else if ( username === 'user' && password === 'password') {
      setIsLoggedIn(true);
      setIsAdmin(false);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setShowError(false);
  }

  return (
    <>
      
      {/* <div>
      {!isLoggedIn && <LoginForm onLogin={handleLogin} />}
      {showError && <ErrorMessage />}
      {isLoggedIn && !isAdmin && (
        <div>
          <UserDashboard />
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      {isLoggedIn && isAdmin && (
        <div>
          <AdminDashboard />
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div> */}

    <div>
      {!isLoggedIn && <LoginForm onLogin={handleLogin} />}
      {showError && <ErrorMessage />}
      {isLoggedIn && !isAdmin && <UserDashboard onLogout={handleLogout} />}
      {isLoggedIn && isAdmin && <AdminDashboard onLogout={handleLogout} />}
    </div>
      
    </>
  );
};

export default App
