import React from 'react';
import "./user.css"
import { setActiveUser } from '../actions';
import {store} from '../store'

const User = ({user}) => {
    const {name, profile_pic, status} = user;
    return (
        <div className="UserCard" onClick={handleUserClick.bind(null,user)}>
            <img src={profile_pic} alt={name} className="UserCard__pic" />
            <div className="UserCard__details">
                <p className="UserCard__details-name">{name}</p>
                <p className="UserCard__details-status">{status}</p>
            </div>
        </div>

    );
}

function handleUserClick({user_id}){
    console.log(`user Id is ${user_id}`);
    store.dispatch(setActiveUser(user_id));
}


export default User;