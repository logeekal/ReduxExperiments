import { getMessages, state } from '../database/static-data';
import { ADD_MESSAGE, EDIT_MESSAGE, DELETE_MESSAGE } from '../constants/action-types';
import _ from 'lodash';

export default (state= getMessages(10),action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            const {text, to_user} = action.payload;
            const message = text;
            const user_id = to_user;
            console.log(`User ID - ${user_id}`);
            const allMsg = state[user_id];
            const number = +_.keys(allMsg).pop() + 1;
            console.log(`number - ${number}`);
            return{
                ...state,
                [user_id] : {
                    ...allMsg,
                    [number] : {
                        number,
                        text : message,
                        is_usr_msg:true
                    }

                }
            }
        case DELETE_MESSAGE:
            var {number , to_user} = action.payload;
            console.log(`Now Deleting Messae number : ${number} to user ${to_user}`)
            const modifiedMsgObj = _.omit(state[to_user], [number])
            console.log(modifiedMsgObj);


            return {
                ...state,
                [to_user] : modifiedMsgObj
            }

        // case EDIT_MESSAGE:
        //     const {number, to_user} = action.payload;


        default:
            return state;
    }
};