import {React} from 'react';

import './Input.scss';

export default function Input(props) {
    const handleTextChange = e => {
        props.onTextChange(e.target.value);
    }

    const handleSendMessage = e => {
        props.onSendMessage()
        e.preventDefault();
    }
    
    return (
        <form onSubmit = {handleSendMessage}>
            <input  onChange = {handleTextChange} 
                    value = {props.value}
            />
            <button>send</button>
        </form>
    )
}