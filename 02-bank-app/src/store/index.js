import {createStore} from 'redux';
import reducer from '../reducer';

const initialState = {
    username: "Janny",
    totalAmount: 2500701
  };

export const store = createStore(reducer,initialState);