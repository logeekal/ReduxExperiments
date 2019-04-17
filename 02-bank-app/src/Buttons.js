import React from 'react';
import {store} from './store';
import {withdrawMoney} from './action';


export const Buttons = ({ amounts }) => (
    
    <div>
        {
            amounts.map((amount, keyCount) => (
                <button
                    data-amount={amount}
                    key={`Btn-${keyCount}`}
                    className='withdraw-btn'
                    onClick ={dispatchBtnAction} 
                    disabled = {store.getState().totalAmount < amount}
                    >
                    WITHDRAW ${amount}
                </button>
            ))
        }

    </div>

)



function dispatchBtnAction(e) {
    const amount  = e.target.dataset.amount;
    store.dispatch(withdrawMoney(amount));
}