import {FETCH_FILMS} from '../constants/actionTypes';

const INITIAL_STATE = { films : []};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_FILMS:
            return {...state, films : action.payload.data.results,
        };
        default:
            return state;
    }
}


