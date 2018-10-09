function costs(state = [], action){
    switch (action.type) {
        case 'ADD_COST':
            return [...state, action.cost]
        case 'GET_COST_SUCCES':
            return action.costs
        default: 
            return state
    }
}
function users(state=[], action){
    switch(action.type){
        case 'ADD_USER':
        return [...state, action.user]
        case 'GET_USER_SUCCES':
        return action.users
        default:
        return state 
    }
}

function rootReducer(state = {}, action){
    return {
        costs: costs(state.costs, action),
        users : users(state.users, action)
    }
}

export default rootReducer;