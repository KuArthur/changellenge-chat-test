import {React,useState} from 'react';

import cn from 'classnames';

import './UsersList.scss';

import User from "../User/User"

export default function UsersList({ users, onUserSelect, selectedUser }) {
    const [isActive, setActive] = useState(false);

    const handleDropList = () => {
        setActive(!isActive);
        
    }

    return (
        <div className = 'UsersList'>
        <div className = 'UsersList--title' onClick = {handleDropList}>
            <span>Список друзей:</span>
            {
                selectedUser &&
                <span className = 'Userlist--username'>{selectedUser.name}</span>
            }
            
        </div>
        <div className = {cn('UsersList--users',isActive ? 'UsersList--users-active': '')}>
            {users.map(user => (
                <div className = 'UsersList--user' onClick = {handleDropList}>
                    <User key={user.id} user={user} isSelected={selectedUser && user.id === selectedUser.id}
                          handleClick = {onUserSelect}
                    />
                </div>
            ))}
        </div>
        
            
        </div>
    )
}