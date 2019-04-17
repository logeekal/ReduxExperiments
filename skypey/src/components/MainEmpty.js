import React from 'react';

import "./MainEmpty.css";

const Empty = ({user}) => {
    const {name, profile_pic, status} =  user;

    const first_name = name.split(" ")[1];

    return (
        <div className="Empty">
            <h1 className="Empty__name">Welcome, {first_name}</h1>
            <img src ={profile_pic} alt={name} className="Empty__img"/>
            <p className="Empty__status">
                <b>Status : </b> {status}
            </p>

            <button className="Empty__btn">Start a Conversation</button>
            <p className ="Empty__info">
                Search for someone to start chatting with or got to Contacts to see who is available.
            </p>
        </div>
    );

};

export default Empty;