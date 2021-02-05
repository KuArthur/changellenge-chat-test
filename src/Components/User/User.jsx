import React from 'react';

import './User.scss';



export default function User(props) {
    return (
        <div className = 'User'>
            <img className = 'User--photo' src = {props.img_url} alt='' />
            <span className = 'User--name'>{props.name}</span>
        </div>
    )
}