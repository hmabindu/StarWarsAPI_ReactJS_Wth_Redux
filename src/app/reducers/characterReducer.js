import {RECEIVE_CHARACTER, RESET_CHARACTERS} from '../constants/actionTypes';

const INITIAL_STATE = {characters: []};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case RECEIVE_CHARACTER:
            return {
                ...state,
                characters: [
                    ...state.characters, action.payload
                ]
            };
        case RESET_CHARACTERS:
            return {
                ...state,
                characters: []
            };
        default:
            return state;
    }
}


