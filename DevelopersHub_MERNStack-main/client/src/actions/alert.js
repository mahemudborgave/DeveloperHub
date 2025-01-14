import {DO_ALERT, UNDO_ALERT} from '../actions/actiontype'
import {v4 as uuidv4} from 'uuid';

export const DoAlert = (msg, alerttype) => dispatch => {
    const id = uuidv4();
    dispatch({
        type: DO_ALERT,
        payload: {msg, alerttype, id}
    });

    setTimeout(()=> dispatch({
        type: UNDO_ALERT, payload: id
    }), 4000);
}