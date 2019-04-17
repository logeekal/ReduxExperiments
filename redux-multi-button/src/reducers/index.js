export default(state,action) => {
    console.log(action);
    console.log(state);
    switch(action.type){
        case "SET_TECH":
            //do something.
           return{
            ...state,
            tech : action.text
           }
        default :
            return state;

    }
    
}