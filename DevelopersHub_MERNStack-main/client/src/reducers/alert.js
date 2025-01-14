import {DO_ALERT, UNDO_ALERT} from '../actions/actiontype'

const initialState =[];

export default function(state = initialState, action){
     const {payload, type} = action;
    switch(type){
        case DO_ALERT:
            return[...state, payload];
            case UNDO_ALERT:
                return state.filter(alert => alert.id !== payload);
            default:
                return state;
    }
}
