import React from 'react';
import { store } from '../store';
import Header from './Header';
import Chats from './Chats';
import _ from 'lodash';
import "./ChatWindow.css";
import MessageInput from '../containers/MessageInput';

const ChatWindow = ({user,activeUser}) => {
    const state = store.getState();
    const activeUserDetails = state.contacts.contacts[activeUser];
    const messages = state.messages[activeUser];
    const typing = state.typing;
    return (
        <div className="ChatWindow">
            <Header user={activeUserDetails} />
            <Chats  messages={_.values(messages)} />
            <MessageInput value={typing} />
        </div>
    );
};


export default ChatWindow;
