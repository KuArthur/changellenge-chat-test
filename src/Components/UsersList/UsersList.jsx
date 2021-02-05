import React from 'react';

import './UsersList.scss';

import User from "../User/User"

export default function UsersList(props) {
    return (
        <div className = 'UsersList'>
        <div className = 'UsersList--title'>Список друзей:</div>
        <div className = 'UsersList--users'>
            {props.users.map((el,i) => (
                <User   name = {el.name}
                        img_url = {el.img}
                        key = {i}
                />
            ))}
        </div>
        
            
        </div>
    )
}