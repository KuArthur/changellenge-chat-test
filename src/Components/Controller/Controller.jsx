import {React} from 'react';

import './Controller.scss';

export default function Controller({onSendMessage, onTextChange,value}) {
    const handleTextChange = e => {
        onTextChange(e.target.value);
    }

    const handleSendMessage = e => {
        onSendMessage()
        e.preventDefault();
    }
    
    return (
        <div className = 'Controller'>
            <form onSubmit = {handleSendMessage}>
                <div className = 'Controller--wrap'>
                    <input  onChange = {handleTextChange} 
                            value = {value}
                            placeholder = 'Введите ваше сообщение'
                            className = 'Controller--input'
                    />
                    <button className = 'Controller--button'></button>
                </div>
            </form>
        </div>
    )
}