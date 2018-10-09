import {dispatch} from 'react';
const ADD_COST = 'ADD_COST'; 
//Example of an action creator
export const addCost = (paidBy, title, amount) => {
    return { 
        type: ADD_COST, 
        cost: {
            paidBy: paidBy, 
            title: title,
            amount: amount
        }      
    }
}

//Dispatch an action to the store
//dispatch(addCost('Julie', 'Costume', 75));

const boundAddCost = (paidBy, title, amount) => dispatch(addCost(paidBy, title, amount));