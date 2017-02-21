import {FETCH_FILM} from '../constants/actionTypes';

const INITIAL_STATE = { film : []};

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {
        case FETCH_FILM:
            return {...state, film : action.payload,
            };
        default:
            return state;
    }
}


