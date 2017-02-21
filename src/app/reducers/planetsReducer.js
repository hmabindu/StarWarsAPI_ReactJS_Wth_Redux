import {RECEIVE_PLANETS, RESET_PLANETS} from '../constants/actionTypes';

const INITIAL_STATE = {planets: []};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case RECEIVE_PLANETS:
            return {
                ...state,
                planets: [
                    ...state.planets, action.payload
                ]
            };
        case RESET_PLANETS:
            return {
                ...state,
                planets: []
            };
        default:
            return state;
    }
}


