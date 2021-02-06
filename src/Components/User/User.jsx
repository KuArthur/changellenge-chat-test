import React from 'react';

import cn from 'classnames';
import './User.scss';

export default function User({ user, handleClick, isSelected }) {
    
    return (
        <div className = {cn('User', isSelected ? 'User-selected': '')} onClick={() => handleClick(user)}>
            <img className = 'User--photo' src = {process.env.PUBLIC_URL + user.img} alt='' />
            <span className = 'User--name'>{user.name}</span>
        </div>
    )
}