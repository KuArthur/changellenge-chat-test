import {React} from 'react';

import './MessagesList.scss';


export default function MessagesList(props) {
    let messages = props.messages;
    
    return (
        <div className = 'MessagesList'>
            <ol>
                {messages.map((el,i) => (
                    <li className = "MessagesList--message" key = {i}>{el}</li>
                ))}
            </ol>
        </div>
    )
}

// {(ref) => list = ref}