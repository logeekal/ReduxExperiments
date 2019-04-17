import { SET_TYPING_VALUE, ADD_MESSAGE } from '../constants/action-types';

const typing = (state="",action) => {
    switch(action.type){
        case SET_TYPING_VALUE:
            return action.payload;
        case ADD_MESSAGE:
            return "";
        default :
            return state;
    }
}

export default typing;