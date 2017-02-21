import {FETCH_STARSHIPS} from '../constants/actionTypes';

const INITIAL_STATE = { starShips:[]};
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case
        FETCH_STARSHIPS:
            return {
                ...state, starShips: action.payload.data.results,
            };
        default:
            return state;
    }
}