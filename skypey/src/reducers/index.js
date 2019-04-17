import user from './user';
import contacts from './contacts';
import activeUser from './activeUser';
import messages from './messages';
import {combineReducers} from 'redux';
import typing from './typing';


export default combineReducers({
    user,
    contacts,
    activeUser,
    messages,
    typing
});