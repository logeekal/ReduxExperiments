export default (state, action) => {
    console.log(action);
    console.log(state);
    let newState;
    switch(action.type){

        
        case "withdraw":
        console.log(`State's total amount is ${state.totalAmount} and Withrawal amount is : ${action.amount}`);
            newState = {
                ...state,
                totalAmount : parseInt(state.totalAmount,10) - parseInt(action.amount,10)
            };

            console.log(newState);
             return{
                ...state,
                totalAmount : parseInt(state.totalAmount,10) - parseInt(action.amount,10)
            }
        default:
            return state;

        }
}