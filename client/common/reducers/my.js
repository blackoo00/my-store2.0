import * as types from '../constants/ActionTypes';

const initialState = {
    info:[],
}

const index = (state = initialState,action) => {
    switch(action.type){
        case types.MY_INIT:
            return {
                ...state,
                info:action.data
            }
        default:
            return state
    }
}

export default index
