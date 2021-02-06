import React from 'react';

import './User.scss';

export default function User({ user, onClick, isSelected }) {
    
    return (
        <div className = 'User' onClick={() => onClick(user.id)}>
            <img className = 'User--photo' src = {process.env.PUBLIC_URL + user.img} alt='' />
            <span className = 'User--name'>{user.name}</span>
            {isSelected && 'dfhgfjftdyrjdftyj'}
        </div>
    )
}