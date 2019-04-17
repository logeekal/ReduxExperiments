import React from 'react';
import { store } from '../store';
import { setTypingValue, addMessage } from '../actions';
import './MessageInput.css';


const MessageInput = ({value}) => {
    const handleChange = e => {
        store.dispatch(setTypingValue(e.target.value));
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        const {typing, activeUser} = store.getState();
        store.dispatch(addMessage(typing, activeUser));
    }

    return(
        <form className="Message" onSubmit={handleSubmit}>
            <input 
                className="Message__input"
                onChange={handleChange}
                value={value}
                placeholder = "Start Writing your message here"
                />
        </form>
    );
}

export default MessageInput;