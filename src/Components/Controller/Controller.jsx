import {React} from 'react';

import './Controller.scss';

export default function Controller(props) {
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