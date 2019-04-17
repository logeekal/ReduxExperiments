import {generateUser} from '../database/static-data'

export default function(state= generateUser(), action){
    return state;
}
