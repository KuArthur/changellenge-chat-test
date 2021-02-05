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
        <div className = 'Controller'>
            <form onSubmit = {handleSendMessage}>
                <div className = 'Controller--wrap'>
                    <input  onChange = {handleTextChange} 
                            value = {props.value}
                            placeholder = 'Введите ваше сообщение'
                            className = 'Controller--input'
                    />
                    <button className = 'Controller--button'></button>
                </div>
            </form>
        </div>
    )
}