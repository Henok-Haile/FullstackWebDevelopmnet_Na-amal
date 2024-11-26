import React, { useState } from "react";
import User from "./components/User.jsx";
import './App.css'

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Henok", age: 31 },
    { id: 2, name: "Sahle", age: 25 },
    { id: 3, name: "Filmon", age: 24 },
    { id: 4, name: "Nebi", age: 28 },
    { id: 5, name: "Eskndr", age: 27 },
  ]);

  const handleEditUser = (id, updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, ...updatedUser } : user
      )
    );
  };

  return (
    <div className="app-container">
      <h1>User List</h1>
      {users.map((user) => (
        <User key={user.id} user={user} onEditUser={handleEditUser} />
      ))}
    </div>
  );
}

export default App;
