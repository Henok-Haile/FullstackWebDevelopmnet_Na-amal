import React, { useState } from "react";
import './User.css'

function User({ user, onEditUser }) {
    const [isEditingUser, setIsEditingUser] = useState(false);
    const [editedUserName, SetEditedUserName] = useState(user.name);
    const [editedUserAge, setEditedUserAge] = useState(user.age);

    const handelSaveUSer = () => {
        onEditUser(user.id, { name: editedUserName, age: editedUserAge });
        setIsEditingUser(false);
    };

    return (
        <div className="user-card">
            {isEditingUser ? (
                <div className="edit-mode">
                    <input
                    className="input"
                    type="text"
                    value={editedUserName}
                    onChange={(e) => SetEditedUserName(e.target.value)}
                    placeholder="Edit user name"
                    />
                    <input
                    className="input"
                    type="number"
                    value={editedUserAge}
                    onChange={(e) => setEditedUserAge(e.target.value)}
                    placeholder="Edit user age"
                    />
                    <div className="button-group">
                        <button className="button save-button" onClick={handelSaveUSer}>Save</button>
                        <button className="button cancel-button" onClick={() => setIsEditingUser(false)}>Cancel</button>
                    </div>
                </div>
                ) : (
                <div className="display-mode">
                    <span className="user-info">
                        {user.name} (Age: {user.age})
                    </span>
                    <button className="button edit-button" onClick={() => setIsEditingUser(true)}>Edit</button>
                </div>
                )}
        </div>
    );
};

export default User;