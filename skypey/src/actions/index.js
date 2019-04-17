import {
    SET_ACTIVE_USER_ID,
    SET_TYPING_VALUE,
    ADD_MESSAGE,
    DELETE_MESSAGE
} from '../constants/action-types';


export const setActiveUser = id => ({
    type : SET_ACTIVE_USER_ID,
    payload : id
});


export const setTypingValue = text => ({
    type : SET_TYPING_VALUE,
    payload : text
})


export const addMessage = (text, to_user) => ({
    type:ADD_MESSAGE,
    payload:{
        text,
        to_user
    }
});

export const deleteMessage = (number, to_user) => ({
    type : DELETE_MESSAGE,
    payload :{
        number,
        to_user
    }
})

export const editMessage = (number, to_user) => {

    console.log(`Delete Event Called`);
    
    return {
    type : DELETE_MESSAGE,
    payload :{
        number,
        to_user
    }}
}