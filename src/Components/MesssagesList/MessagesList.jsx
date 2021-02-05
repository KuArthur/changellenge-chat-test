import {React} from 'react';

import './MessagesList.scss';

import photo from "../../img/user.svg";

export default function MessagesList(props) {
    let messages = props.messages;
    
    return (
        <div className = 'MessagesList'>
                {messages.map((el,i) => (
                    <div className = 'MessagesList--message'> 
                        <p className = "MessagesList--text" key = {i}>{el}</p>
                        <img className = 'MessagesList--photo' src = {photo} alt = "" />
                    </div>
                    
                ))}
        </div>
    )
}

// {(ref) => list = ref}