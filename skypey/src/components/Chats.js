import React, {Component} from 'react';
import "./Chats.css";
import {EDIT_IMAGE_URL} from '../constants/config';
import { store } from '../store';
import { deleteMessage } from '../actions';
import _ from 'lodash';

const Chat = ({message}) =>{
    
    

    const {text, is_user_msg, number} = message;
    const activeUser = store.getState() .activeUser;

    const handleDeleteEvent = (activeUser) =>{
        var number = message.number;
        console.log(`Delete event triggered for ${activeUser} for message number ${number}`);

        store.dispatch(deleteMessage(number,activeUser));
    }

    return (
        <span className={`Chat ${is_user_msg ? "" : "user"}`}>
            {is_user_msg ? "": <img src="https://welfare-fund.pwa.co.th/_intranet/beeldbijeeting.png" className ="EditImage" alt="delete" onClick={handleDeleteEvent.bind(null,activeUser)}/> }
            {text}
        </span>
    );
}

class Chats extends Component{
    constructor(props){
        super(props);
        this.chatsRef = React.createRef();
    }

    componentDidMount(){
        this.scrollToBottom();
    }

    componentDidUpdate(){
        this.scrollToBottom();
    }

    //Scrollto botton method
    scrollToBottom(){
        this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
    }

    render(){
        return(
            <div className="Chats" ref={this.chatsRef}>
                {this.props.messages.map(
                    message=> (
                        <Chat message={message} key={message.number}/>
                    )
                )}
            </div>
        );
    }
}

export default Chats;