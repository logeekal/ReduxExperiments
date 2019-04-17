import _ from 'lodash';

function xyz(){
const obj = {
    'a':1 ,
    'b' :{
        'ba' :1,
        'bb' : 2
    },
    'c' :{
        'ba' :1,
        'bb' : 2

    }
}

return _.omit(obj, ['ba']);

}