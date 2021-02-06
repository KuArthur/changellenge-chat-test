import React from 'react';

import './UsersList.scss';

import User from "../User/User"

export default function UsersList({ users, onUserSelect, selectedUserId }) {

    return (
        <div className = 'UsersList'>
        <div className = 'UsersList--title'>Список друзей:</div>
        <div className = 'UsersList--users'>
            {users.map(user => (
                <User key={user.id} user={user} isSelected={user.id === selectedUserId}
                      onClick = {onUserSelect}
                />
            ))}
        </div>
        
            
        </div>
    )
}